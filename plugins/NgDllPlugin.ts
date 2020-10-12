import * as webpack from 'webpack';
import { SyncWaterfallHook } from 'tapable';
import * as path from 'path';
const asyncLib = require('neo-async');

import DllEntryPlugin from 'webpack/lib/DllEntryPlugin';

export interface NgDllPluginOptions {
  filter?: NgFilterPluginOptions;
  path: string;
  name: string;
  format?: boolean;
}

export class NgDllPlugin {
  constructor(private options: NgDllPluginOptions) {}

  apply(compiler) {
    compiler.hooks.entryOption.tap('NgDllPlugin', (context, entry) => {
      const itemToPlugin = (item, name) => {
        if (Array.isArray(item)) {
          return new DllEntryPlugin(context, item, name);
        }
        throw new Error('NgDllPlugin: supply an Array as entry');
      };
      if (typeof entry === 'object' && !Array.isArray(entry)) {
        Object.keys(entry).forEach((name) => {
          itemToPlugin(entry[name], name).apply(compiler);
        });
      } else {
        itemToPlugin(entry, 'main').apply(compiler);
      }
      return true;
    });
    new LibManifestPlugin(this.options).apply(compiler);

    new NgFilterPlugin(this.options.filter).apply(compiler);
  }
}

interface NormalModule extends webpack.compilation.Module {
  rawRequest: string | null;
  context: string | null;
  dependencies: any[];
}

interface NgFilterPluginOptions {
  mode: 'full' | 'auto' | 'manual';
  map?: { [name: string]: string[] };
}

class NgFilterPlugin {
  explanation = 'NgFilterPlugin';
  unCompressMap: Map<string, string[]>;
  constructor(private options: NgFilterPluginOptions = { mode: 'full' }) {
    // this.options.mode = this.options.mode || 'full';
    if (this.options.mode === 'manual') {
      if (this.options.map) {
        this.unCompressMap = new Map(Object.entries(this.options.map));
      } else {
        throw new Error('[manual] mode must have [map] Property');
      }
    }
  }

  apply(compiler: webpack.Compiler) {
    compiler.hooks.thisCompilation.tap('NgFilterPlugin', (compilation) => {
      const hooks: {
        modules: SyncWaterfallHook<string, webpack.compilation.Chunk>;
      } = compilation.mainTemplate.hooks as any;
      hooks.modules.tap('NgFilterPlugin', (e, chunk) => {
        for (const module of chunk.modulesIterable as webpack.SortableSet<
          NormalModule
        >) {
          if (
            (!module.context.includes('node_modules') && module.rawRequest) ||
            (module.context || '').includes('$$_lazy_route_resource')
          ) {
            chunk.modulesIterable.delete(module);
          }
        }
        return e;
      });

      compilation.hooks.optimizeDependencies.tap(
        'NgFilterPlugin',
        (modules) => {
          this.unCompressMap = new Map();
          for (const module of modules as NormalModule[]) {
            switch (this.options.mode) {
              case 'full':
                module.used = true;
                module.usedExports = true;
                module.addReason(null, null, this.explanation);
                break;
              case 'auto':
                if (
                  module.rawRequest &&
                  this.unCompressMap.has(module.rawRequest)
                ) {
                  const oldIsUsed = module.isUsed;
                  const unCompressList = this.unCompressMap.get(
                    module.rawRequest
                  );
                  module.isUsed = function(name: string) {
                    if (unCompressList.includes(name)) {
                      return name;
                    }
                    return oldIsUsed.call(this, name);
                  };
                }
                module.addReason(null, null, this.explanation);
                this.setUnCompressMap(module);
                break;
              case 'manual':
                if (
                  module.rawRequest &&
                  this.unCompressMap.has(module.rawRequest)
                ) {
                  const oldIsUsed = module.isUsed;
                  const unCompressList = this.unCompressMap.get(
                    module.rawRequest
                  );
                  module.isUsed = function(name: string) {
                    if (unCompressList.includes(name)) {
                      return name;
                    }
                    return oldIsUsed.call(this, name);
                  };
                }
                module.addReason(null, null, this.explanation);
                break;
              default:
                break;
            }
          }
        }
      );
    });
  }

  /**
   * 查找模块中引用.不压缩名字的
   *
   * @author cyia
   * @date 2020-10-08
   * @param module
   */
  setUnCompressMap(module: NormalModule) {
    if (!/node_modules/.test(module.context || '') && module.dependencies) {
      if (module.dependencies && module.dependencies.length) {
        module.dependencies.forEach((dependency) => {
          if (
            dependency.request &&
            /(^(@angular(\/|\\)(core|common|router|platform-browser|forms))$)|rxjs/.test(
              dependency.request
            ) &&
            dependency.id
          ) {
            const list: string[] =
              this.unCompressMap.get(dependency.request) || [];
            if (!list.includes(dependency.id)) {
              list.push(dependency.id);
            }
            this.unCompressMap.set(dependency.request, list);
          }
        });
      }
    }
  }
}

class LibManifestPlugin {
  private options;
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'LibManifestPlugin',
      (compilation, callback) => {
        asyncLib.forEach(
          compilation.chunks,
          (chunk, callback) => {
            if (!chunk.isOnlyInitial()) {
              callback();
              return;
            }
            const targetPath = compilation.getPath(this.options.path, {
              hash: compilation.hash,
              chunk,
            });
            const name =
              this.options.name &&
              compilation.getPath(this.options.name, {
                hash: compilation.hash,
                chunk,
              });
            const manifest = {
              name,
              type: this.options.type,
              content: Array.from(chunk.modulesIterable, (module: any) => {
                if (module.libIdent) {
                  const ident = module.libIdent({
                    context: this.options.context || compiler.options.context,
                  });
                  if (ident) {
                    return {
                      ident,
                      data: {
                        id: module.id,
                        buildMeta: module.buildMeta,
                      },
                    };
                  }
                }
              })
                .filter(Boolean)
                .reduce((obj, item) => {
                  obj[item.ident] = item.data;
                  return obj;
                }, Object.create(null)),
            };
            // Apply formatting to content if format flag is true;
            const manifestContent = this.options.format
              ? JSON.stringify(manifest, null, 2)
              : JSON.stringify(manifest);
            const content = Buffer.from(manifestContent, 'utf8');
            compiler.outputFileSystem.mkdirp(
              path.dirname(targetPath),
              (err) => {
                if (err) {
                  return callback(err);
                }
                compiler.outputFileSystem.writeFile(
                  targetPath,
                  content,
                  callback
                );
              }
            );
          },
          callback
        );
      }
    );
  }
}
