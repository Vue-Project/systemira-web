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
import ThePageHeader from "../../components/marketing/ThePageHeader.vue";
import TheAbout from "../../components/marketing/TheAbout.vue";
import TheQuestions from "../../components/marketing/TheQuestions.vue";
import TheSteps from "../../components/marketing/TheSteps.vue";
import TheWorks from "../../components/TheWorks.vue";
import OurProcces from "../../components/marketing/OurProcces.vue";

export default {
  name: "Services",
  layout: "main",
  components: {
    ThePageHeader,
    TheAbout,
    TheQuestions,
    OurProcces,
    TheWorks,
    TheSteps,
  },
};
</script>
