import * as webpack from 'webpack';
import * as path from 'path';
export default (config: webpack.Configuration, options) => {
  delete options.index;

  const entry: any = config.entry;

  config.entry = entry.main;
  config.plugins.push(
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest: require('./dist/manifest.json'),
    })
  );
  config.optimization.runtimeChunk = false;
  config.output.libraryTarget = 'var';
  config.output.library = 'OtherModule';
  config.output.filename = 'OtherModule.js';
  return config;
};