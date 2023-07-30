<template>
  <div class="home">
    
    
    <NavBar/>
    

    <TwoColGrid 
    heading="Design Your Own Frame"
    p="Already own something that needs framing? Or have a really special digital photo that deserves a unique frame? Then this is the option for you! Fully customise everything - styles, sizes, personalisation. Handmade by experts using premium quality materials. Order from the confort of your home, with free delivery and  art 'pick up' service."
    :imageUrl="imageUrl"/>


    <FourColGrid
     heading="Brancaster"
     p="Wire-Bushed bare wood"
     height="170"
     width="113"
     :imageUrl="imageUrl3"
     />

    <CustomButton buttonName="DESIGN A CUSTOM FRAME"/>

  
    
      <TwoColGrid 
      heading="Standard sizes & gift frames"
      p="Cost effective readymade sizes. Choose a frame style then upload your photo and we'll print, build, and dispatch your frame the next day. Ideal for quick gifts."
      :imageUrl="imageUrl2"
      />

      <FourColGrid
      heading="Small Gift Frame in Brancaster"
      p="20x30cm textured bare wood frame "
      height="324"
      width="324"
    
      :imageUrl="imageUrl4"

      />

    
      <CustomButton buttonName="SHOP STANDARD FRAMES"/>


      <TwoColGrid
      heading="Gallery walls"
      p="Want that statement gallery wall without the hassle? Choose one of our gallery walls and upload your photos in minutes, or get one of our designers to help create a truly custom one. Coming soon!"
      :imageUrl="imageUrl5"
      />
      <CustomButton buttonName="COMING SOON!"/>
    
    
      <FooterBar/>

      <FooterWhite/>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/Navbar.vue'
import TwoColGrid from '@/components/TwoColGrid.vue'
import FourColGrid from '@/components/FourColGrid.vue'
import CustomButton from '@/components/CustomButton.vue'
import FooterBar from '@/components/Footer.vue'
import FooterWhite from '@/components/FooterWhite.vue'
// import img1 from '@/assets/img1.png'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    TwoColGrid,
    FourColGrid,
    CustomButton,
    FooterBar,
    FooterWhite
    
  },
  data() {
    return {
      imageUrl: "https://shop.hangframing.com/assets/frames/customframe-c81b00b0cfb8b30a7a7ad6a635eb50a142917c799e1aaa9e102096d1b32bbb75.png",
      imageUrl2: "https://shop.hangframing.com/assets/frames/standardframe-2d1925bbb42a0354be0baf917f9eafe51042961456117afd933aaf4cbc7f1c80.png",
      imageUrl3: "https://shop.hangframing.com/packs/media/images/photo-placeholder-78613966eac4b15e347986ac96eabb1a.jpg",
      imageUrl4: "https://bucketeer-a69f55fc-6100-46a4-b39e-d5ecc035e718.s3.eu-west-1.amazonaws.com/53i6s55wstrc73yp1pywmnvl30e1?response-content-disposition=inline%3B%20filename%3D%22brancaster_frame_1.jpg%22%3B%20filename%2A%3DUTF-8%27%27brancaster_frame_1.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARVGPJVYVAERTJQOD%2F20230730%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230730T054034Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=30b58ef329ea328f1e390e4981d331533706379b7bc5fdbabf07f59a62f06606",
      imageUrl5: "https://shop.hangframing.com/assets/frames/gallery-walls-1572dc25d71b2a7e69569a78e9949156e7dff6ccff10a9f510a4c199cc40f2df.jpg",
      padding:"40px"
    }
  }

}
</script>
