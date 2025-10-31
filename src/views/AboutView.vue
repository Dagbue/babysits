<template>
  <div class="alpha">
    <about-hero-section/>
    <about-section1/>
    <about-section2/>
    <about-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import AboutHeroSection from "@/components/About/AboutHeroSection.vue";
import AboutSection1 from "@/components/About/AboutSection1.vue";
import AboutSection2 from "@/components/About/AboutSection2.vue";
import AboutSection3 from "@/components/About/AboutSection3.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: 'AboutView',
  components: {FooterHome2, AboutSection3, AboutSection2, AboutSection1, AboutHeroSection},
}
</script>

<style scoped>

</style>