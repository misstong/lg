import {h,init} from 'snabbdom'
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'

const patch = init([style,eventlisteners])

let vnode = h('div',{
    style: {
        background:'red'
    },
},[
    h('div','hhh')
])

let app = document.querySelector('#app')

patch(app,vnode)