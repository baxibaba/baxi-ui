# 快速上手

## 安装

```bash
npm install baxi-ui -S
```

## 使用

### 全量加载

```js
import 'baxi-ui/lib/flexible' // Mobile adaptive solution
import Vue from 'vue'
import baxi from 'baxi-ui'
import 'baxi-ui/lib/styles/baxi-ui.css'

Vue.use(baxi)
```

### 按需加载

```js
/** main.js **/-

import 'baxi-ui/lib/flexible'
import Vue from 'vue'
import baxiButton from 'baxi-ui/lib/button/button.js'
import 'baxi-ui/lib/button/button.css'

Vue.use(baxiButton)

/** main.vue */-

<template>
  <baxi-button text="按钮"/>
</template>
```

<h3>注</h3>

* `styles/baxi-ui.css` 为`rem单位`，所以配套使用`flexible.js`，单个组件命名样式同理也为`rem单位`。

* 若不想使用`flexible.js`，`每个组件或styles`文件夹内分别提供`px单位`样式文件。如`styles/baxi-ui-px.css`、`button/button-px.css`。

