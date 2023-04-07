import {defineUserConfig,defaultTheme} from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { searchPlugin } from '@vuepress/plugin-search'

import navbar from "./navber";
import sidebar from "./sidebar";


// @ts-ignore
export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Afflatus-Documents',
    description: '生态文档网站',
    head:[['link', { rel: 'icon', href: '/logo/toplogo.svg' }]],
    plugins:[
        //回到顶部
        backToTopPlugin(),
        //图片缩放功能
        mediumZoomPlugin({}),
        //搜索框
        searchPlugin({}),
    ],

    theme:defaultTheme({
        home:'/',
        logo:'/logo/toplogo.svg',
        //默认主体
        navbar,
        sidebar,
        editLinkText:'在github上编辑此页',
        docsRepo:'https://github.com/18222137497/afflatus-documents',
        docsBranch:'master',
        docsDir:'docs',
        editLinkPattern:':repo/-edit/:branch/:path',
        sidebarDepth:3,
        notFound:['页面不存在'],
        backToHome:'返回首页'
    })
})