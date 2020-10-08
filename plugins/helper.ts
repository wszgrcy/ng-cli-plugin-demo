import * as webpack from 'webpack';
import { NgDllPlugin, NgDllPluginOptions } from './NgDllPlugin';
import * as path from 'path';

export function setNgDllPlugin(
  config: webpack.Configuration,
  option: {
    ngDllPluginOptions: NgDllPluginOptions;
    output?: webpack.Configuration['output'];
  },
  angularOptions?
) {
  // doc 删除index.html
  if (angularOptions) {
    delete angularOptions.index;
  }
  const entry: any = config.entry;

  //   delete entry.polyfills;
  //   delete entry.styles;
  config.entry = entry.main;
  config.output = {
    library: option.ngDllPluginOptions.name,
    filename: 'dll.js',
    ...config.output,
    ...(option.output || {}),
  };
  config.plugins.push(new NgDllPlugin(option.ngDllPluginOptions));
  config.optimization.runtimeChunk = false;
  (config.stats as any).reasons = true;

  for (let i = 0; i < config.plugins.length; i++) {
    const plugin = config.plugins[i];
    if (plugin.constructor.name === 'LicenseWebpackPlugin') {
      config.plugins.splice(i, 1);
      i--;
    }
  }
}
