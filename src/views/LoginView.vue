<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <LoginComp msg="Welcome to Your Vue.js App" />
        <VBtn> hello

        </VBtn>
    </div>
</template>

<script>
// @ is an alias to /src
import LoginComp from '@/components/LoginComponent.vue'

export default {
    name: 'LoginView',
    components: {
        LoginComp
    }
}
</script>
