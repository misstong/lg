<template>
    <div class="steps">
        <div class='steps-line'></div>
        <div class='step' 
            v-for="i in count" :key="i"
            :style="{color: active >= i ? activeColor : defaultColor}">
            {{i}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Steps',
    props: {
        count: {
            type: Number,
            default: 3
        },
        active: {
            type: Number,
            default: 0
        },
        activeColor: {
            type: String,
            default: 'red'
        },
        defaultColor: {
            type: String,
            default: 'green'
        }
    }
}
</script>
<style scoped>
.steps{
    display: flex;
    justify-content: space-between;
    position: relative;
}
.steps-line{
    position: absolute;
    height: 2px;
    background: rgb(223, 231, 239);

    top: 50%;
    left: 24px;
    right: 24px;
    z-index: 1;
}
.step{
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: white;
    border: 2px solid;
    /* justify-content: center;
     align-items: center; */
     font-weight: 700;
     box-sizing: border-box;
     z-index: 2;
}
</style>