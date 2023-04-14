<template>
  <div>
    <NavDark />
    <ThePageHeader />
    <TheQuestions />
    <TheAbout />
    <TheSlogan />
    <UiUx />
    <TheProcess />
    <ProccesSteps />
    <OurProcces />
    <TheWorks />
  </div>
</template>

<script>
import ThePageHeader from "../../components/ui-ux/ThePageHeader.vue";
import TheAbout from "../../components/ui-ux/TheAbout.vue";
import TheQuestions from "../../components/ui-ux/TheQuestions.vue";
import TheSlogan from "../../components/ui-ux/TheSlogan.vue";
import TheWorks from "../../components/TheWorks.vue";
import OurProcces from "../../components/ui-ux/OurProcces.vue";
import TheProcess from "../../components/ui-ux/TheProcess.vue";
import UiUx from "../../components/ui-ux/UiUx.vue";
import ProccesSteps from "../../components/ui-ux/ProccesSteps.vue";

export default {
  name: "Services",
  layout: "main",
  components: {
    ThePageHeader,
    TheAbout,
    TheQuestions,
    TheSlogan,
    OurProcces,
    TheWorks,
    UiUx,
    ProccesSteps,
    TheProcess
  },
};
</script>
