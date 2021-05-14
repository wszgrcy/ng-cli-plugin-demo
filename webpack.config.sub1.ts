import * as webpack from 'webpack';
import * as path from 'path';
import {
  LoadRemoteModulePlugin
} from 'webpack-ng-dll-plugin';
import { BootstrapAssetsPlugin } from 'webpack-bootstrap-assets-plugin';

export default (config: webpack.Configuration, options) => {
  config.module.rules.unshift({
    test: new RegExp(path.join(__dirname, 'src')+'.*\\.(js|tsx?)$'),
    use: 'webpack-ng-dll-plugin/dist/ng-named/loader/import',
  });
  const entry: any = config.entry;
  config.entry = entry.main;
  config.plugins.push(
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest: require('./dist/manifest.json'),
    })
  );
  config.output.jsonpFunction = 'sub1Jsonp'
  config.output.filename = 'sub1.[name].[hash:20].js';
  config.plugins.push(new LoadRemoteModulePlugin());

  // 不同环境需要不同的部署地址,或者获取到资源清单后手动加部署地址,使加载生效
  config.plugins.push(
    new BootstrapAssetsPlugin({
      deployUrl: options.deployUrl,
    })
  )
  return config;
};
