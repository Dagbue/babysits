<template>
  <div class="home">
    <hero-section/>
    <home-section1/>
    <footer-home2/>
  </div>
</template>

<script>

import HeroSection from "@/components/Home/HeroSection.vue";
import HomeSection1 from "@/components/Home/HomeSection1.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: 'HomeView',
  components: {FooterHome2, HomeSection1, HeroSection},
}
</script>

<style scoped>

</style>