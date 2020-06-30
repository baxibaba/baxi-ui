
<p align="center">
<img style="padding-right: 20px"src="https://www.dengwb.com/static/logo/baxi.png" width="120px"/>
<img src="https://www.dengwb.com/static/logo/Dengwb.png" width="100px"/>
</p>

<p font-size="40px" align="center">基于 Vue 和 Webpack 构建的移动端UI组件库</p>

<p align="center">
  <a href="https://github.com/vuejs/vue" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/badge/vue-v2.5.16-brightgreen.svg" alt="vue">
  </a>

  <a href="https://www.npmjs.com/package/baxi-ui" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/npm/v/baxi-ui.svg?style=flat" alt="npm">
  </a>

  <a href="https://github.com/webpack/webpack" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/badge/webpack-v4.29.6-blue.svg" alt="webpack">
  </a>
  
  <a href="https://github.com/gulpjs/gulp" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/badge/gulp-v4.0.2-critical.svg" alt="gulp">
  </a>

  <a href="https://github.com/dengwb1991/baxi-ui/blob/master/LICENSE" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/npm/l/baxi-ui.svg" alt="LICENSE">
  </a>

  <a href="https://github.com/dengwb1991/baxi-ui/commits/master" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/github/last-commit/dengwb1991/baxi-ui.svg?style=flat-square" alt="commit">
  </a>

  <a href="https://www.npmjs.com/package/baxi-ui" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/npm/dt/baxi-ui.svg" alt="downloads">
  </a>

  <a href="https://github.com/dengwb1991/baxi-ui/stargazers" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/github/stars/dengwb1991/baxi-ui.svg?style=social&label=Stars" alt="star">
  </a>

  <a href="https://travis-ci.org/dengwb1991/baxi-ui" rel="nofollow" target="_blank">
    <img src="https://api.travis-ci.org/dengwb1991/baxi-ui.svg?branch=master" alt="build">
  </a>

  <a href="https://codecov.io/gh/dengwb1991/baxi-ui" rel="nofollow" target="_blank">
    <img src="https://codecov.io/gh/dengwb1991/baxi-ui/branch/master/graph/badge.svg" alt="codecov">
  </a>
</p>

<h2 align="center">了解 baxi-ui</h2>

<table>
  <tbody>
    <tr>
      <td align="center" font-size="18px">
        官网
      </td>
      <td align="center" font-size="18px">
        示例
      </td>
      <td align="center" font-size="18px">
        作者
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="http://baxi-ui.dengwb.com" target="_blank">
          <img src="https://baxi-ui.dengwb.com/static/images/baxi-ui-home.png"  width="250px">
        </a>
      </td>
      <td align="center">
        <a href="http://baxi-ui.dengwb.com/examples" target="_blank">
          <img src="https://baxi-ui.dengwb.com/static/images/qr-code.png" width="250px"/>
        </a>
      </td>
      <td align="center">
        <a href="https://www.dengwb.com/static/wechat/my-wechat-code2.png" target="_blank">
          <img src="https://www.dengwb.com/static/wechat/my-wechat-code2.png" width="250px"/>
        </a>
      </td>
    </tr>
  </tbody>
</table>

### 开发心得链接

[UI组件库从0到1开发心得](https://juejin.im/post/5c6504d06fb9a049c6445a25)

[UI组件库从1到N开发心得-组件篇](https://juejin.im/post/5ce21c8ee51d45109725fdbe)

[UI组件库从1到N开发心得-单元测试篇](https://juejin.im/post/5da5656651882557494cc3e3)

[UI组件库从1到N开发心得-声明文件篇](https://juejin.im/post/5ea644046fb9a03c65690529)

<h2 align="center">安装 & 使用</h2>

```bash
npm install baxi-ui -S
```

```js
import 'baxi-ui/lib/flexible' // Mobile adaptive solution
import Vue from 'vue'

import baxi from 'baxi-ui'
import 'baxi-ui/lib/styles/baxi-ui.css'

Vue.use(baxi)
```

### 按需加载

```js
import 'baxi-ui/lib/flexible'
import Vue from 'vue'

import Button from 'baxi-ui/lib/button/button.js'
import 'baxi-ui/lib/button/button.css'

Vue.use(Button)
```

### 开发

```bash
git clone git@github.com:dengwb1991/baxi-ui.git

cd baxi-ui

npm install 

npm run dev

# 启动文档开发

npm run docs
```

### 命令介绍

```bash

npm run dev             #启动组件开发

npm run docs            #启动文档开发

npm run prod            #组件构建

npm run build           #整体构建

npm run build:style     #样式构建

npm run build:icon      #svg转化为iconfont

npm run build:docs      #文档构建

npm run build:example   #示例构建

npm run build:component #按需组件构建

npm run lint            #eslint测试

npm run unit            #组件单元测试

npm run test            #eslint测试 & 组件单元测试
```
