export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/nucleo-icons.css' },
      { rel: 'stylesheet', href: '/assets/css/nucleo-svg.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'stylesheet', href: '/assets/css/soft-ui-dashboard.min.css?v=1.0.9' },
      { rel: 'stylesheet', href: 'https://cdn.datatables.net/1.13.1/css/dataTables.bootstrap5.min.css' },      
      { rel: 'stylesheet', href: 'https://cdn.datatables.net/buttons/2.3.2/css/buttons.dataTables.min.css' },      
    ],
    script:[
      { src:"https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"},
      { src:"/assets/js/core/popper.min.js"},
      { src:"https://kit.fontawesome.com/42d5adcbca.js"},
      { src:"/assets/js/core/bootstrap.min.js"},
      { src:"/assets/js/plugins/perfect-scrollbar.min.js"},
      { src:"/assets/js/plugins/smooth-scrollbar.min.js"},
      { src:"/assets/js/plugins/dragula/dragula.min.js"},
      { src:"/assets/js/plugins/jkanban/jkanban.js"},
      { src:"/assets/js/plugins/chartjs.min.js"},
      { src:"https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"},
      { src:"https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap5.min.js"},
      { src:"https://cdn.datatables.net/buttons/2.3.2/js/dataTables.buttons.min.js"},
      { src:"https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"},
      { src:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"},
      { src:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"},
      { src:"https://cdn.datatables.net/buttons/2.3.2/js/buttons.html5.min.js"},
      { src:"https://cdn.datatables.net/buttons/2.3.2/js/buttons.print.min.js"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api',
    "~/plugins/vee-validate.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios','vue-sweetalert2/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  }
}
