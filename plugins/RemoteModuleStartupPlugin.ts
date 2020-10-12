import * as webpack from 'webpack';
import { SyncWaterfallHook } from 'tapable';
import { readFileSync } from 'fs';
import * as path from 'path';
const { Template } = webpack;
export class RemoteModuleStartupPlugin {
  apply(compiler: webpack.Compiler) {
    compiler.hooks.thisCompilation.tap(
      'RemoteModuleStartupPlugin',
      (compilation) => {
        ((compilation.mainTemplate.hooks as any)
          .startup as SyncWaterfallHook).tap(
          'addInsertLoadModule',
          (source) => {
            return Template.asString([
              '// RemoteModuleStartupPlugin',
              readFileSync(
                path.resolve(__dirname, './module.template.js')
              ).toString(),
              source,
            ]);
          }
        );
      }
    );
  }
}
