import {defineUserConfig,defaultTheme,type DefaultThemeOptions} from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { searchPlugin } from '@vuepress/plugin-search'
import navbar from "./navber";
import sidebar from "./sidebar";
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import { getDirname, path } from '@vuepress/utils'
import {mermaidPlugin} from "@renovamen/vuepress-plugin-mermaid";


// @ts-ignore
const __dirname = getDirname(import.meta.url)
// @ts-ignore
export default defineUserConfig<DefaultThemeOptions>({
    // extendsMarkdown:(md)=>{
    //     md.use(mermaidPlugin)
    // },
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
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname,'./components'),
        }),
        // mermaidPlugin({
        //     token:"mermaid"
        // })
    ],
    theme:defaultTheme({
        home:'/',
        logo:'/logo/toplogo.svg',
        navbar,
        sidebar,
        editLinkText:'在github上编辑此页',
        docsRepo:'https://github.com/A-afflatus/afflatus-documents',
        docsBranch:'main',
        docsDir:'docs',
        editLinkPattern:':repo/blob/:branch/:path',
        lastUpdatedText:'最近更新',
        contributorsText:'贡献者',
        themePlugins:{
        },
        sidebarDepth:3,
        notFound:['页面不存在'],
        backToHome:'返回首页'
    })
})