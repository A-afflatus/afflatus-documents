import { defineClientConfig } from '@vuepress/client'
// Vuetify
// import 'vuetify/styles'  //todo 那里用放那
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
//
// const vuetify = createVuetify({
//     components,
//     directives,
// })
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // app.use(vuetify)
    },
    setup() {},
    rootComponents: [],
})