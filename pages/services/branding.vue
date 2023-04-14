<template>
  <div>
    <NavDark />
    <ThePageHeader />
    <TheAbout />
    <TheQuestions />
    <TheTime />
    <TheSlogan />
    <TheCraft />
    <OurProcces />
    <TheWorks />


    
  </div>
</template>

<script>
import ThePageHeader from "../../components/branding/ThePageHeader.vue";
import TheAbout from "../../components/branding/TheAbout.vue";
import TheQuestions from "../../components/branding/TheQuestions.vue";
import TheTime from "../../components/branding/TheTime.vue";
import TheSlogan from "../../components/branding/TheSlogan.vue";
import TheCraft from "../../components/branding/TheCraft.vue";
 import TheWorks from "../../components/branding/TheWorks.vue";
import OurProcces from "../../components/branding/OurProcces.vue";


export default {
  name: "Services",
  layout: "main",
  components: { ThePageHeader,TheAbout ,TheQuestions, TheTime,TheCraft,TheSlogan,OurProcces,TheWorks },
};
</script>
