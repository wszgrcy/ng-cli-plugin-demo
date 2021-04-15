import * as webpack from 'webpack';
import * as path from 'path';
import { setNgDllPlugin,RemoteModuleStartupPlugin,RemoteModuleManifestStartupPlugin,NgNamedPlugin } from 'webpack-ng-dll-plugin';
export default (config: webpack.Configuration, options) => {
  setNgDllPlugin(
    config,
    {
      output: {
        filename: 'dll.js',
      },
      ngDllPluginOptions: {
        path: path.join(__dirname, 'dist', 'manifest.json'),
        name: 'Dll',
        format: true,
        filter: {
          mode: 'full',
        },
      },
    },
    options
  );
  config.plugins.push(new RemoteModuleStartupPlugin());
  config.plugins.push(new RemoteModuleManifestStartupPlugin());
  config.plugins.push(new NgNamedPlugin());

  return config;
};