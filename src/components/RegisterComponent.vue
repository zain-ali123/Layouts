<template>
    <v-sheet width="300" class="mx-auto">
        <form class="mt-16 pt-16   mb-16 pb-16 " >

            <h1 >Create an account</h1>
            <p>Already have an accoont?</p>

            <v-text-field v-model="form.email"  label="E-mail"></v-text-field>
            <span v-if="errors.email" class="error">{{ errors.email }}</span>

            <v-text-field type="password" v-model="form.password" 
            label="Password"></v-text-field>
            <span v-if="errors.password" class="error">{{ errors.password }}</span>

            <v-text-field
            v-model="form.confirmPassword" label="Confirm Password"></v-text-field>
            <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>

        
        
                <v-btn @click="submitForm"> Sign Up</v-btn>
                <CustomButton @click="submitForm" buttonName="Sign Up"/>
        

                <p>Forgot Password</p>
        </form>
    </v-sheet>
    
</template>
<script>
import CustomButton from './CustomButton.vue';
export default {
    name: 'RegComp',
    components: {
     CustomButton   
    },
    data() {
        return {
            form: {
                email: '',
                
                password: '',
                confirmPassword: '',
            },
            errors: {},
        };
    },
    methods: {
        getForm(obj) {
            console.log(obj);
        },
        validateForm() {

            this.errors = {};

            console.log(this.form.email);
            console.log(this.form.password);
            console.log(this.form.confirmPassword);

 


            if (!this.form.email) {
                this.errors.email = 'Email is required.';
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.email = 'Invalid email format.';
            }


            if (!this.form.password) {
                this.errors.password = 'Password is required.';
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.form.password)) {
                this.errors.password = 'Password must include a special character.';
            } else if (!/^[A-Z]/.test(this.form.password)) {
                this.errors.password = 'Password must start with a capital letter.';
            } else if (this.form.password.length !== 8) {
                this.errors.password = 'Password must be 8 digits long.';
            }


            if (this.form.password !== this.form.confirmPassword) {
                this.errors.confirmPassword = 'Passwords do not match.';
            }

            return Object.keys(this.errors).length === 0;
        },
        isValidEmail(email) {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        },
        submitForm() {
            if (this.validateForm()) {
                

                localStorage.setItem('email', this.form.email),
                localStorage.setItem('password', this.form.password)
                console.log('Form is valid. Submitting...');
            } else {

                console.log('Form is invalid. Please correct the errors.');
            }
        },
    },
};
</script>

<style>
.error {
    color: red;
}
</style>

