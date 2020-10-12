import webpack from 'webpack';
const { ConcatSource } = require('webpack-sources');
import { SyncWaterfallHook } from 'tapable';
export class RemoteModuleMainTemplatePlugin {
  varExpression = 'loadRemoteModuleJsonpCallback';
  constructor() {
  }
  apply(compiler: webpack.Compiler) {
    compiler.hooks.thisCompilation.tap('加入模块载入', (compilation) => {
      this.apply2(compilation);
    });
  }
  apply2(compilation: webpack.compilation.Compilation) {
    const { mainTemplate, chunkTemplate } = compilation;

    const onRenderWithEntry = (source, chunk, hash) => {
      return new ConcatSource(
        `loadRemoteModuleJsonpCallback('${compilation.outputOptions.filename}',`,
        source,
        `)`
      );
    };

    for (const template of [mainTemplate, chunkTemplate]) {
      ((template as any).hooks.renderWithEntry as SyncWaterfallHook).tap(
        'RemoteModuleMainTemplatePlugin',
        onRenderWithEntry
      );
    }

    (mainTemplate.hooks as any).globalHashPaths.tap(
      'RemoteModuleMainTemplatePlugin',
      (paths) => {
        if (this.varExpression) {
          paths.push(this.varExpression);
        }
        return paths;
      }
    );
    mainTemplate.hooks.hash.tap('RemoteModuleMainTemplatePlugin', (hash) => {
      hash.update(`set remote module ${this.varExpression}`);
    });
  }
}
