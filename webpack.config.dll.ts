import * as webpack from 'webpack';
import * as path from 'path';
import { NgDllPlugin } from './plugins/NgDllPlugin';
export default (config: webpack.Configuration, options) => {
  delete options.index;
  const entry: any = config.entry;

  delete entry.polyfills;
  delete entry.styles;
  config.entry = entry.main;
  config.output.library = 'TLIB';
  config.output.filename = 'dll.js';
  config.plugins.push(
    new NgDllPlugin({
      path: path.join(__dirname, 'dist', 'manifest.json'),
      name: 'TLIB',
      format: true,
      filter: {
        mode: 'auto'
      }
    })
  );
  config.optimization.runtimeChunk = false;
  (config.stats as any).reasons = true;

  for (let i = 0; i < config.plugins.length; i++) {
    const plugin = config.plugins[i];
    if (plugin.constructor.name === 'LicenseWebpackPlugin') {
      config.plugins.splice(i, 1);
      i--;
    }
  }
  return config;
};
