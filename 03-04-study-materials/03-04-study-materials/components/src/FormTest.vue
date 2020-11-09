<template>
    <t-form :model="user" :rules="rules">
        <form-item label="username" prop="username">
            <t-input v-model="user.username"/>
        </form-item>
    </t-form>
</template>
<script>
import tForm from './Form/Form'
import FormItem from './Form/FormItem'
import tInput from './Form/Input'
export default {
    components: {
        tForm,
        FormItem,
        tInput
    },
    data(){
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: 'please input username'
                    }
                ]
            }
        }
    }
}
</script>