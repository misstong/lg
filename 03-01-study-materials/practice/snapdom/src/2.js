import {h,init} from 'snabbdom'

let patch = init({})

let vnode = h('div#container',[
    h('h1','heelo'),
    h('p','hhhhhh')
])

let app = document.querySelector('#app')
patch(app,vnode)