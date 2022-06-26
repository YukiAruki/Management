import Vue from 'vue'
import App from './App.vue'
import { Button, Container, Main, Header, Aside, Col, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownItem, DropdownMenu, Row, Card, Form, FormItem, Input, Select, Option, Switch, DatePicker, Table, TableColumn, RadioGroup, Radio, Dialog, Alert } from 'element-ui';

import router from '@/router'
import store from '@/store'
import http from 'axios'
import '@/api/mock'

Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Dialog)
Vue.use(Alert)

Vue.prototype.$http = http
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.userProfile === {}) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
