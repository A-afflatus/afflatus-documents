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
            '/Java/Java模块化',
            '/Java/JDK17相较于JDK8的变化'
        ]
    },
]
export default sidebar