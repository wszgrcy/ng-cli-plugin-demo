import webpack from 'webpack';
const { ConcatSource } = require('webpack-sources');
import { SyncWaterfallHook } from 'tapable';
export class LoadModuleMainTemplatePlugin {
  varExpression = '';
  copyObject = false;
  constructor() {
    // this.varExpression = varExpression;
    // this.copyObject = copyObject;
  }
  apply(compiler: webpack.Compiler) {
    compiler.hooks.thisCompilation.tap('加入模块载入', (compilation) => {
      this.apply2(compilation);
    });
  }
  apply2(compilation: webpack.compilation.Compilation) {
    const { mainTemplate, chunkTemplate } = compilation;

    const onRenderWithEntry = (source, chunk, hash) => {
      compilation;
      //   const varExpression = (mainTemplate as any).getAssetPath(
      //     this.varExpression,
      //     {
      //       hash,
      //       chunk,
      //     }
      //   );

      return new ConcatSource(
        `loadRemoteModuleJsonpCallBack('${compilation.outputOptions.filename}',`,
        source,
        `)`
      );
    };

    for (const template of [mainTemplate, chunkTemplate]) {
      ((template as any).hooks.renderWithEntry as SyncWaterfallHook).tap(
        'SetVarMainTemplatePlugin',
        onRenderWithEntry
      );
    }

    (mainTemplate.hooks as any).globalHashPaths.tap(
      'SetVarMainTemplatePlugin',
      (paths) => {
        if (this.varExpression) {
          paths.push(this.varExpression);
        }
        return paths;
      }
    );
    mainTemplate.hooks.hash.tap('SetVarMainTemplatePlugin', (hash) => {
      hash.update('set var');
      hash.update(`${this.varExpression}`);
      hash.update(`${this.copyObject}`);
    });
  }
}
