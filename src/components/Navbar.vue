<template>
    
        <v-toolbar class="navbar"  :elevation="8" color="white"  >
            <v-row>
                <v-col >
                    <v-btn class="row2"><img src="https://shop.hangframing.com/packs/media/images/menu-358af27ae60dd136e044ab5a7158dc17.svg" 
                        height="24"
                        width="24">
                    </v-btn>
                    <v-btn class="row1">START FRAMING </v-btn>
                    <v-btn class="row1">HOW IT WORKS</v-btn>
                </v-col>
                
                <v-col>
                    <img class="pt-3" src="https://shop.hangframing.com/packs/media/images/logo-53eda53696dabc99444cd45e6de4397f.svg"
                    :width="120" 
                    :height="64"
                    > 
                </v-col>
                <v-col>
                    <v-btn class="row1">SUPPORT</v-btn>
                    <v-btn>
                        <img src="https://shop.hangframing.com/packs/media/images/cart-a658f4322b783b7024887231772b10b6.svg"
                        :height="24"
                        :width="24" 
                        >
                    </v-btn>
                    <v-btn class="row1">
                        <img src="https://shop.hangframing.com/packs/media/images/profile-e7c02624c777f154177908acc16539d0.svg"
                        :height="24"
                        :width="24" 
                        >
                    </v-btn>

                    
                </v-col>
            </v-row>

        </v-toolbar>
  
</template>


<script>
export default {
    name:'NavBar'
}
</script>
<style  scoped>
.navbar{
    position: fixed;
    width: 100%;
    height: 96px;
    top:0;
    left: 0;
    z-index:1;

}
.row2{
    display: none;
}
@media  (max-width:768px) {
    .navbar{
        height: 96px;
    }
    .row1{
        display: none;
    }
    .row2{
        display: contents;
        
    }
    
}

</style> >


