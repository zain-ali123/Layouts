<template>
    <div class="Register">
        <h1>Register to App</h1>
        <RegComp/>
    </div>
</template>
<script>
import RegComp from '@/components/RegisterComponent.vue'

export default {
    name: 'RegisterView',
    components: {

       RegComp
    }
}
</script>