---
lang: zh-CN
title: HelloWorld
description: HelloWorld
---

# Hello World
> 第一行和6-8行高亮
> :no-line-numbers 是禁用行号的意思
> :no-v-pre 让代码可以被编译，但是被指定高亮的语法无法被编辑
```ts{1,6-8}:no-line-numbers
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
>从外部源获取文本并指定高亮展示
@[code js](./show.js)
> 也可以直接写模版语法
> 这个标签是其中一个默认的组件
<Badge text="演示"/>
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>
> public 是静态字段根地址
![一个图片](/images/img.png)
> 内置组件
<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm install
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>
