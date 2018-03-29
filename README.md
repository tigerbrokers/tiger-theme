tiger-theme
==========

老虎桌面端多主题样式, 基于 [Bulma样式框架](https://bulma.io/)

# 使用方式

```
yarn add tiger-theme
```

```
// 引入单个主题
@import '~tiger-theme/theme/dark/index';

// 引入全部主题
@import '~tiger-theme/theme/index';
```

多主题时，在`<html>`上添加属性：
```
<html theme="dark">
```

在浏览器中引用：
```
<link rel="stylesheet" type="text/css" href="dist/tiger-theme.all.css" />
```

# 开发

```
// 本地开发
yarn dev

// 编译构建
yarn build

// 发布示例
yarn release
```

- `_variables.scss` 文件修改覆写bulma变量
- `_override.scss` 文件修改覆写bulma样式


# 示例

访问： https://static.itiger.com/desktop/cdn/tiger-theme/

同时也可直接引用CDN资源：
- https://static.itiger.com/desktop/cdn/tiger-theme/tiger-theme.all.css
- https://static.itiger.com/desktop/cdn/tiger-theme/tiger-theme.dark.css
- https://static.itiger.com/desktop/cdn/tiger-theme/tiger-theme.light.css
