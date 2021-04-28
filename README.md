# NgCliPlugin

## 简介

- 使用`ngx-center`实现远程加载子项目的一个演示 demo
- 允许子项目不跟随主项目打包,但是可以使用主项目的一切导出,开发时就如同传统 ng 项目一样,没有上手难度

## 演示

- 访问`https://wszgrcy.github.io/ng-cli-plugin-demo`
- 打开调试面板(F12)
- 点击`sub1`链接
- `点击使用import`按钮为演示子项目使用`import('xxxx')`操作
- `点击使用主模块服务`按钮为演示子项目使用主项目的操作
- 显示的`app-show-in-main`为声明在主模块,但是可以在子模块中调用

## 本地启动

- `yarn build:center-dll` 构建依赖
- `yarn start:center-main` 启动主项目
- `yarn start:sub1` 启动子项目
