require("./main.css")

const Vue = require("vue")
const VueMaterial = require("vue-material")
const VueRouter = require("vue-router")

// http://vuematerial.io/#/getting-started
Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.component("hello-menu", require("./components/menu.vue"))

new Vue({
  el: "#app",
  render: r => r(require("./components/base-router.vue")),
  router: new VueRouter({
    routes: [
      { path: "/pessoa/list", component: require("./features/lista-pessoas.vue") },
      { path: "/evento/list", component: require("./features/lista-eventos.vue") },
      { path: "/pessoa/:idpessoa", component: require("./features/detalhe-pessoa.vue") },
      { path: "/evento/:idevento", component: require("./features/detalhe-evento.vue") },
      { path: "/participantes/:idevento", component: require("./features/lista-pessoas-eventos.vue") },
      // https://router.vuejs.org/en/essentials/dynamic-matching.html
      { path: "/", redirect: "/pessoa/list" }
    ]
  })
})