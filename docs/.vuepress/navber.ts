import {NavbarConfig} from "@vuepress/theme-default";

const navbar:NavbarConfig = [
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
                children:[
                    '/Java/Java模块化.md',
                ]
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
        link:'https://github.com/'
    }
]
export default navbar