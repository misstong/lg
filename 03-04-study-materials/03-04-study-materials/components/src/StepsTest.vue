<template>
    <div>
    <Steps :active="active"/>
    <div @click="onClick">click me</div>
    </div>
</template>
<script>
import Steps from './Steps.vue'
export default {
    name: 'StepsTest',
    data(){
        return {
            active: 0
        }
    },
    components: {
    Steps
    // StepsTest
  },
    methods:{
        onClick(){
            console.log('click', this.active)
            this.active += 1
        }
    }
}
</script>