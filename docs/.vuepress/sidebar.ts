import {SidebarConfig} from "vuepress";

const sidebar:SidebarConfig=[
    {
        text:'项目介绍',
        link:'/项目介绍.md'
    },
    {
        text:'文章导航',
        link:'/目录首页.md'
    },
    {
        text: 'Java',
        collapsible:true,
        children:[
            {
              text:'Java模块化',
              link:'/Java/Java模块化/Java模块化介绍.md',
              children:[
                  '/Java/Java模块化/Java模块化介绍',
                  '/Java/Java模块化/Java模块化关键字',

              ]
            },
            {
                text:'JavaJDK',
                link:'/Java/JavaJDK/历代JDK特性.md',
                children:[
                    '/Java/JavaJDK/历代JDK特性',
                ]
            },
            {
                text:'Java升级指南',
                link:'/Java/Java升级指南/JavaRelease升级指南.md',
                children:[
                    '/Java/Java升级指南/JavaRelease升级指南',
                ]
            },
        ]
    },
    {
        text: '设计模式',
        collapsible:true,
        children:[
            {
                text:'创建型模式',
                link:'/设计模式/创建型模式/单例模式.md',
                children:[
                    '/设计模式/创建型模式/单例模式',
                    '/设计模式/创建型模式/原型模式',
                    '/设计模式/创建型模式/建造者模式',
                    '/设计模式/创建型模式/工厂模式',
                    '/设计模式/创建型模式/抽象工厂模式',
                ]
            },
            {
                text:'结构型模式',
                // link:'/Java/Java模块化/Java模块化介绍.md',
                children:[
                ]
            },
            {
                text:'行为型模式',
                // link:'/Java/Java模块化/Java模块化介绍.md',
                children:[
                ]
            },
        ]
    },
]
export default sidebar