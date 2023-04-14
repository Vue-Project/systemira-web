<template>
  <div>
    <NavDark />
    <ThePageHeader />
    <TheAbout />
    <TheQuestions />
    <TheSteps />
    <OurProcces />
    <TheWorks />


    
  </div>
</template>

<script>
import ThePageHeader from "../../components/web/ThePageHeader.vue";
import TheAbout from "../../components/web/TheAbout.vue";
import TheQuestions from "../../components/web/TheQuestions.vue";
import TheSteps from "../../components/web/TheSteps.vue";

 import TheWorks from "../../components/TheWorks.vue";
import OurProcces from "../../components/web/OurProcces.vue";


export default {
  name: "Services",
  layout: "main",
  components: { ThePageHeader,TheAbout ,TheQuestions,OurProcces,TheWorks,TheSteps },
};
</script>
