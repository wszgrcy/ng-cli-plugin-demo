# NgCliPlugin

## 演示
- 直接启动`dist/ng-cli-plugin`的项目可以看结果

## dll构建
- `npm run dll` 生成在`dist/dll`

## 远程组件构建
- `npm run build:other` 生成在`dist/module`
> 草创未达到完美状态
## 主项目构建
- `npm run build`
## 手动启动
- dll构建后构建主项目,然后将`dll.js`复制到`ng-cli-plugin`启动