import * as webpack from 'webpack';
import * as path from 'path';
import { setNgDllPlugin } from './plugins/helper';
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
          mode: 'auto',
        },
      },
    },
    options
  );
  return config;
};