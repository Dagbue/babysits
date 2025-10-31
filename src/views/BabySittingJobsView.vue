<template>
  <div class="alpha">
    <baby-sitting-jobs-hero-section/>
    <baby-sitting-jobs-section1/>
    <about-section2/>
    <about-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import AboutSection3 from "@/components/About/AboutSection3.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";
import BabySittingJobsHeroSection from "@/components/BabySittingJobs/BabySittingJobsHeroSection.vue";
import BabySittingJobsSection1 from "@/components/BabySittingJobs/BabySittingJobsSection1.vue";
import AboutSection2 from "@/components/About/AboutSection2.vue";

export default {
  name: "BabySittingJobsView",
  components: {AboutSection2, BabySittingJobsSection1, BabySittingJobsHeroSection, FooterHome2, AboutSection3}
}
</script>



<style scoped>

</style>