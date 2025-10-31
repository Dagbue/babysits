<template>
  <div class="alpha">
    <how-it-works-hero-section/>
    <how-it-works-section1/>
    <about-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";
import AboutSection3 from "@/components/About/AboutSection3.vue";
import HowItWorksHeroSection from "@/components/HowItWorks/HowItWorksHeroSection.vue";
import HowItWorksSection1 from "@/components/HowItWorks/HowItWorksSection1.vue";

export default {
  name: "HowItWorksView",
  components: {HowItWorksSection1, HowItWorksHeroSection, AboutSection3, FooterHome2}
}
</script>

<style scoped>

</style>