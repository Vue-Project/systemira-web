<template>
  <div>
    <NavLight />
    <ThepageHeader />
    <WorkContent />
    <!-- <Thepagnation /> -->
    <TheProjects />
  </div>
</template>

<script>
import ThepageHeader from "../components/works/ThepageHeader.vue";
import WorkContent from "../components/works/WorkContent.vue";
import Thepagnation from "../components/ThePagnation.vue";
import NavLight from "../components/NavlLIght.vue";


export default {
  name: "WorksPage",
  layout: "main",
  components: {
    ThepageHeader,
    WorkContent,
    Thepagnation,
    NavLight

  },
  // data() {
  //   return {
  //     logo: require("../assets/images/logo-light.png"),
  //   };
  // },
};
</script>


<style></style>
