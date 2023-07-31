


<template>
    <div class="footer" style="background-color: black; color: white;">
         <v-container  >
            <v-row>
                
                <v-col cols="2">
                    <v-row>
                             <img src="https://shop.hangframing.com/packs/media/images/logo-white-a06cc5f9d7c5151e4f81c160997f48f4.svg" 
                            :height="52"
                            :width="100">
                        </v-row>
                       <v-row class="mt-16"> 
                        <img src="https://shop.hangframing.com/packs/media/images/instagram-34275c83da69ba0058d8fc6f1229662e.svg" 
                            :height="20"
                            :width="40">
                        <img src="https://shop.hangframing.com/packs/media/images/facebook-6c836a8321a95985d59c7b588756b754.svg" 
                            :height="20"
                            :width="40">
                        <img src="https://shop.hangframing.com/packs/media/images/pinterest-5558e3e1194f02aeb154f48029c20ef0.svg" 
                            :height="20"
                            :width="40">
                       </v-row>
                </v-col>

                <!-- Second column (1/6 width) -->
                <v-col cols="2">
                    <v-row>
                        <h5 class="pb-8">START FRAMING</h5>
                    </v-row>
                    <v-row>
                        <p class="mb-4">Browse all frames</p>
                        <p class="mb-4"> Upload a photo</p>
                        <p class="mb-4">Frame an original</p>
                    
                       

                    </v-row>
                </v-col>

                <!-- Third column (1/6 width) -->
                           <v-col cols="2">
                        <v-row>
                            <h5 class="pb-8">START FRAMING</h5>
                        </v-row>
                        <v-row>
                            <p class="mb-4">Browse all frames</p>
                            <p class="mb-4"> Upload a photo</p>
                            <p class="mb-4">Frame an original</p>
                    
                       

                        </v-row>
                    </v-col>

                <!-- Fourth column (1/6 width) -->
                            <v-col cols="2">
                        <v-row>
                            <h5 class="pb-8">START FRAMING</h5>
                        </v-row>
                        <v-row>
                            <p class="mb-4">Browse all frames</p>
                            <p class="mb-4"> Upload a photo</p>
                            <p class="mb-4">Frame an original</p>
                    
                       

                        </v-row>
                    </v-col>

                <v-col cols="4">
                    <h5 class="pb-8">SIGN UP FOR EMAIL UPDATES</h5>
                        <div style="border: 4px white ;">
                            <input type="text" style="color: white; " placeholder="Enter Your Email*" >
                            <v-btn variant="text" style="color: white;">SUBMIT</v-btn>
                        </div>

               
                </v-col>
            </v-row>
        </v-container>
    </div>
   
</template>

<script>
export default {
    name: 'FooterBar',
};
</script>
<style scoped>
.footer{
    padding-top: 128px;
    padding-bottom: 128px;
}
</style>


