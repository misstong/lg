<template>
  <div id="app">
    <!-- <Steps :count="3"/> -->
    <!-- <StepsTest /> -->
    <FormTest />
  </div>
</template>

<script>
// import Steps from './Steps.vue'
// import StepsTest from './StepsTest'
import FormTest from './FormTest'
export default {
  name: 'app',
  components: {
    // Steps
    // StepsTest
    FormTest
  },
  data() {
    return {
      count: 3
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
