<template>
  <div>
      <input :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
    props:{
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    methods: {
        handleInput(e){
            this.$emit('input',e.target.value)
            
            const findParent = (parent)=>{
                while(parent){
                    if(parent.$options.name ==='FormItem'){
                        break
                    }else{
                        parent = parent.$parent

                    }
                }
                return parent
            }
            const parent = findParent(this.$parent)
            console.log('input')
            if(parent){
                console.log('validate input')
                parent.validate()
            }
        }
    }
}
</script>

<style>

</style>