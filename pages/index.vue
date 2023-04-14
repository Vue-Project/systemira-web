<template>
  <div>
    <NavDark />
    <HeroSection />
    <OurService />
    <TheAbout />
    <TheWorks />
    <TheTeam />
    <TheCounter />
    <TheLastPosts />
    <TheProjects />

    <u-animate-container>
      <u-animate
        name="fadeIn"
        delay="0s"
        duration="1s"
        :iteration="1"
        :offset="0"
        animateClass="animated"
        :begin="false"
      >
      </u-animate>
    </u-animate-container>
    <u-animate-container>
      <u-animate
        name="fadeIn"
        delay="0s"
        duration="2s"
        :iteration="1"
        :offset="0"
        animateClass="animated"
        :begin="false"
      >
      </u-animate>
    </u-animate-container>
  </div>
</template>
<style scoped></style>

<script>
// mount with component
import { UAnimateContainer, UAnimate } from "vue-wow";
//import Pagination from '@/components/Pagination';
// import TheHeader from '../components/TheHeader.vue'
import HeroSection from "../components/common/HeroSection.vue";
import TheLastPosts from "../components/TheLastPosts.vue";
import OurService from "../components/services/OurServices.vue";
import TheTeam from "../components/TheTeam.vue";
import TheCounter from "../components/TheCounter.vue";
export default {
  name: "IndexPage",
  layout: "main",
  components: {
    TheLastPosts,
    UAnimateContainer,
    UAnimate,
    OurService,
    TheTeam,
    TheCounter,
    HeroSection,
  },

  middleware: ["password-protect"],

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  },
  methods: {
    logout() {
      this.$passwordProtect.removeAuthorisation();
      this.$nextTick(() => {
        this.$router.push(this.localePath("password"));
      });
    },
  },
};
</script>
