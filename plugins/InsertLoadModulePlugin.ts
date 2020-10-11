import * as webpack from 'webpack';
import { SyncWaterfallHook } from 'tapable';
import { readFileSync } from 'fs';
import * as path from 'path';
const { Template } = webpack;
export class InsertLoadModulePlugin {
  apply(compiler: webpack.Compiler) {
    // compiler.hooks.afterCompile.tap('测试', () => {
    //   console.log('这里断掉');
    // });
    compiler.hooks.compilation.tap('InsertLoadModulePlugin', (compilation) => {
      console.log('调用测试');
      ((compilation.mainTemplate.hooks as any)
        .startup as SyncWaterfallHook).tap('插入自启脚本', (source) => {
        if (
          ((compilation as any).name &&
            (compilation as any).name.endsWith('scss')) ||
          ((compilation.entries[0] as any).rawRequest &&
            (compilation.entries[0] as any).rawRequest.endsWith('scss'))
        ) {
          return source;
        }

        console.log('调用测试启动');
        // const file = readFileSync(
        //   path.resolve(__dirname, './module.template.js')
        // ).toString();
        return Template.asString([
          readFileSync(
            path.resolve(__dirname, './module.template.js')
          ).toString(),
          source,
        ]);
        // return source;
      });
    });
  }
}
