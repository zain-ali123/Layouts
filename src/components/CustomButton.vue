<template>
    <div class="div"></div>
         <v-col  class="btn">
            <v-btn  rounded="xl" size="x-large" class="button">{{ buttonName }}</v-btn>
          </v-col>
          <div class="div"></div>
</template>

<script>
export default {
    name:'CustomButton',
    props: {
        buttonName: String
    }
}
</script>
<style scoped>
.button{
     color: rgba(29,32,25,var(--tw-text-opacity));
     background-color: rgba(250,239,142);
           



}
.btn{
    display: flex;
    justify-content: center;
    align-items: center;

}
.div{
    height: 35px;
}
   
</style>