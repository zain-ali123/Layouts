<template>
    >
        <v-container >
            <v-row>
                    <v-col 
                    v-for="x in 4"
                    :key="x"
                    >
                    <v-card height="430"
                    width="255"
                
                     :elevation="3"
                 
                     >
                        <div class="img "   >
                            <img 
                        
                            :src="imageUrl" alt="Image" 
                            :margin-top="padding"
                            :width="width"
                            :height="height"
                    
                        ></div>
                    <div >
                        <h3 class="h">{{ heading }}</h3>
                        <p class="h">{{ p }}</p>
                    </div>

                    </v-card>

                    </v-col>
                </v-row>
        </v-container>
    
    
        
    
</template>
<script>
export default {
    name: 'FourColGrid',
    props: {
        heading: String,
        p: String,
        imageUrl: {
            type: String,
            required: true,
        },
        height: String,
        width: String,

        
    },
    methods: {
        
    }

    
}
</script>
<style>
.card{
    height: 400;
    width: 250;
}
.img{
    width: 255px;
    height: 324px;
    padding: auto;

}
.h{
    text-align: left;
    margin-left:20px ;
}

</style>