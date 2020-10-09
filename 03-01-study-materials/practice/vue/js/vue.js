class Dep{
    constructor(){
        this.subs = []
    }
    addSubs(target) {
        if(target&&target.update){
            this.subs.push(target)
        }
        
    }
    notify(){
        this.subs.forEach(sub=>{
            sub.update()
        })
    }
} 
 
 class Observer{
     constructor(data) {
        this.walk(data)
     }
     walk(data){
         if(!data || typeof data!=='object'){
             return
         }
         let that = this
        Object.keys(data).forEach(key=>{
            let val = data[key]
            this.walk(val)
            let dep = new Dep()
            Object.defineProperty(data, key,{
                enumerable:true,
                configurable:true,          
                get(){
                    Dep.target && dep.addSubs(Dep.target)
                    return val
                },
                set(newVal){
                    if(newVal===val){
                        return 
                    }
                    val = newVal
                    that.walk(newVal)
                    dep.notify()
                }
            })
        })
     }
 }

 class Watcher{
     constructor(vm,key,cb){
         this.vm = vm
         this.key = key
         this.cb = cb

         Dep.target = this 
         this.oldValue = this.vm[key]
         Dep.target = null
     }
     update(){
         let newValue = this.vm[this.key]
         if (this.oldValue !== newValue){
             this.cb(newValue)
         }
     }
 }
 class Compiler{
     constructor(vm){
         this.vm = vm
         this.el = vm.$el 
         this.compile(this.el)
     }
     compile(el){
         let childNodes = el.childNodes
         Array.from(childNodes).forEach(node=>{
             if(this.isElementNode(node)) {
                // console.dir(node)
                this.compileElement(node)
             }else if (this.isTextNode(node)){
                //  console.log('text',node)
                 this.compileText(node)
             }
             if(node.childNodes&&node.childNodes.length){
                 this.compile(node)
             }
         })
     }
     compileElement(node) {
        Array.from(node.attributes).forEach(attr=>{
            let attrName=attr.name
            if(this.isDirective(attrName)){
                attrName = attrName.substr(2)
                let key = attr.value
                if(attrName.startsWith('on')) {
                    this.onUpdater(node,attrName,key)
                }else{                   
                    this.update(node,attrName,key)
                }
                
            }
        })
     }
     update(node,attrName,key){
         let updatefn = this[attrName+'Updater']
         updatefn&&updatefn.call(this,node,this.vm[key],key)
     }
     textUpdater(node,value,key) {
         node.textContent = value
         new Watcher(this.vm,key,(newVal)=>{
            node.textContent = newVal
        })
     }
     modelUpdater(node,value,key){
         node.value = value
         node.addEventListener('input', ()=>{
             this.vm[key]=node.value
         })

         new Watcher(this.vm,key,(newVal)=>{
            node.value = newVal
        })
     }
     htmlUpdater(node,value,key){
         node.innerHTML=value
         new Watcher(this.vm,key,(newVal)=>{
             node.innerHTML =newVal
         })
     }
     onUpdater(node,attrName,key) {
        let ret = attrName.split(':')
        let maps={}
        if(ret.length>1){
            maps[ret[1]]=key
        }else{
            maps=JSON.parse(key)
        }
        let that = this
        Object.keys(maps).forEach(key=>{
            node.addEventListener(key,()=>{
                let value = maps[key]
                let method = that.vm.$methods[value]
                method&&method.call(that.vm)
            })
        })

     }
     compileText(node){
         let reg=/\{\{(.+?)\}\}/
         let value = node.textContent
         if(reg.test(value)){
             let key = RegExp.$1.trim()
             node.textContent = this.vm[key]

             new Watcher(this.vm,key,(newVal)=>{
                 node.textContent = newVal
             })
         }
     }
     isDirective(attr){
         return attr.startsWith('v-')
     }
     isTextNode(node) {
         return node.nodeType === 3
     }
     isElementNode(node){
         return node.nodeType===1
     }
 }


 class Vue{
    constructor(options){
        this.$options = options || {}
        this.$data = options.data || {}
        this.$methods = options.methods || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;
        this._proxyData(this.$data)
        new Observer(this.$data)
        new Compiler(this)
    }
    _proxyData (data) {
        Object.keys(data).forEach(key=>{
            Object.defineProperty(this, key,{
                enumerable:true,
                configurable:true,          
                get(){
                    return data[key]
                },
                set(newVal){
                    if(newVal===data[key]){
                        return 
                    }
                    data[key] = newVal
                }
            })
        })
        
    }
}