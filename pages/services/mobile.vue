<template>
  <div>
    <NavDark />
    <ThePageHeader />
    <TheQuestions />
    <MobileApplications />
    <TheSlogan />
    <OurProcces />
    <TheWorks />
  </div>
</template>

<script>
import ThePageHeader from "../../components/mobile/ThePageHeader.vue";
import TheQuestions from "../../components/mobile/TheQuestions.vue";
import MobileApplications from "../../components/mobile/MobileApplications.vue";
import TheSlogan from "../../components/mobile/TheSlogan.vue";
import TheWorks from "../../components/TheWorks.vue";
import OurProcces from "../../components/mobile/OurProcces.vue";

export default {
  name: "Services",
  layout: "main",
  components: {
    ThePageHeader,
    TheQuestions,
    TheSlogan,
    OurProcces,
    TheWorks,
    MobileApplications
  },
};
</script>
