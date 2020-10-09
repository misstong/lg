import {h,init} from 'snabbdom'
// var snabbdom = require('snabbdom')

let patch= init([])
let vnode = h('div#container.cls','hello')

let app = document.querySelector('#app')

let oldVnode = patch(app,vnode)

vnode = h('div','hello hh')
patch(oldVnode,vnode)