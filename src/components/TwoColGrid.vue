<template>
    <v-app>
        <v-container  class="container">
            
                <v-row >
                    <!-- First column -->
                    <v-col cols="6">
                        <div class="text">
                            <h1 >{{ heading }}</h1>
                            <p >{{ p }}
                            </p>
                        
                        </div>
                    </v-col>

                    
                    <v-col cols="6">
                        <div 
                        style="height: 601; width: 643;">
                            <img class="image"  :src="imageUrl" alt="Image" 

                             />
                        </div>
                    </v-col>
                </v-row>
        
            
        </v-container>
    </v-app>
    
</template>

<script>
export default {
    name: 'TwoColGrid',
    props: {
        heading: String,
        p: String,
        imageUrl: {
            type: String,
            required: true,
        },
    }
};
</script>


<style scoped>
.container{
    padding-top: 116px ;
    padding-bottom:100px ;
    padding-right: 24px;
    padding-left: 24px; 
}
.text{
    text-align: left;
    font-family: Apercu,sans-serif;
   
    margin-top :30%; ;
}
.image{
    height: auto;
    width: auto;
    /* object-fit: contain; */
}
</style>

