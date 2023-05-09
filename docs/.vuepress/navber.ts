import {NavbarConfig} from "@vuepress/theme-default";

const navbar:NavbarConfig = [
    // {
    //     text: '测试页',
    //     link:'/HelloWorld.md'
    // },
    {
        text: 'AI对话',
        link:'/extra/AI对话.md'
    },
    {
        text: '首页',
        link:'/'
    },
    {
        text: '目录',
        link:'/目录首页.md',
        children:[
            {
                text: 'Java',
                link:'/Java/Java模块化/Java模块化介绍.md'
            },
            {
                text: '设计模式',
                link: '/设计模式/创建型模式/单例模式.md'
            }

        ]
    },
    // 控制元素何时被激活
    {
        text: '了解更多',
        children: [
            {
                text: '更多生态',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
            },
            {
                text: '文件资源',
                link: '/not-foo/',
            },
        ],
    },
    {
        text:'GitHub',
        link:'https://github.com/A-afflatus/afflatus-documents'
    }
]
export default navbar