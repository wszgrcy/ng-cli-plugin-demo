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

# 子模块使用主模块服务
- 直接`npm run serve`
- 路由路径`Remote.js`
- 路由模块地址`Remote.js`
- `设置路由`后`点击跳转`
- 出现`点击执行主模块服务`,打开F12查看
- 可以查看构建出来的`Remote`并没有引入主模块的服务