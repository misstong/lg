let _Vue = null

export default class VueRouter{
    static install(Vue) {
        //缓存
        if(VueRouter.installed){
            return
        }
        VueRouter.installed = true

        //记录vue
        _Vue = Vue

        //在Vue中增加一个方法，使创建vue实例时可以将参数中
        //router实例放到Vue的prototype中

        _Vue.mixin({
            beforeCreate(){
                if (this.$options.router) {
                    _Vue.prototype.$router = this.$options.router
                }
                
            }
        })

    }

    constructor(options) {
        this.options = options
        this.mode = options.mode || 'history'
        this.routeMap = {}
        this.data = _Vue.observable({
            current:'/'
        })
        this.init()
    }

    init(){
        this.createRouteMap()
        this.initComponents(_Vue)
        this.initEvent()
    }
    createRouteMap(){
        this.options.routes.forEach(route=>{
            this.routeMap[route.path]=route.component
        })
    }
    initComponents(Vue) {
        const self = this
        Vue.component('router-link',{
            props:{
                to: String,
            },
            render(h){
                return h("a",{
                    attrs:{
                        href: this.to
                    },
                    on:{
                        click: this.clickhander
                    }
                }, [this.$slots.default])
            },
            methods:{
                clickhander(e) {
                    if(self.mode==="history"){
                        history.pushState({},"",this.to)
                    }else{
                        console.log(this.to)
                        window.location.hash = this.to.substr(1)
                    }
                    
                    this.$router.data.current=this.to
                    e.preventDefault()

                }
            }
        })

        
        Vue.component('router-view',{
            render(h){
                const component = self.routeMap[self.data.current]
                return h(component)
            }
        })
    }

    initEvent() {
        window.addEventListener('popstate',()=>{
            this.data.current = window.location.pathname
        })
        window.addEventListener('hashchange',()=>{
            this.data.current = window.location.hash
        })
    }
}