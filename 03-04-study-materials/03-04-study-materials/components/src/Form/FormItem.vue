<template>
  <div>
      <label>{{label}}</label>
      <div>
          <slot></slot>
          <p v-if="errMessage">{{errMessage}}</p>
      </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
    name:'FormItem',
    inject: ['form'],
    props:{
        label: {
            type: String
        },
        prop: {
            type: String
        }
    },
    data () {
        return {
        errMessage: ''
        }
    },
    methods:{
        validate(){
            const value = this.form.model[this.prop]
            const rules = this.form.rules[this.prop]
            console.log('validate', value, rules)
            const validator = new AsyncValidator({[this.prop]:rules})
            return validator.validate({[this.prop]: value},errors=>{
                if(errors){
                    this.errMessage = errors[0].message
                }else{
                    this.errMessage=""
                }

            })
        }
    }
}
</script>

<style>

</style>