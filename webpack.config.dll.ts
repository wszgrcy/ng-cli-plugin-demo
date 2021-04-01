import * as webpack from 'webpack';
import * as path from 'path';
import { setNgDllPlugin } from 'webpack-ng-dll-plugin';
import { RemoteModuleStartupPlugin } from 'webpack-ng-dll-plugin';
export default (config: webpack.Configuration, options) => {
  setNgDllPlugin(
    config,
    {
      output: {
        filename: 'dll.js',
      },
      ngDllPluginOptions: {
        path: path.join(__dirname, 'dist', 'manifest.json'),
        name: 'TLIB',
        format: true,
        filter: {
          mode: 'full',
        },
      },
    },
    options
  );
  config.plugins.push(new RemoteModuleStartupPlugin());
  return config;
};
