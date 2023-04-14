<template>
  <div>
    <NavDark />
    <ThePageHeader />
    <TheAbout />
    <TheVision />
    <TheMission />
    <TheValues />
    <TheTeam />
    <ChooseUs />

  </div>
</template>

<script>
import TheAbout from "../components/company/TheAbout.vue";
import ThePageHeader from "../components/company/ThePageHeader.vue";
import TheMission from "../components/company/TheMission.vue";
import TheValues from "../components/company/TheValues.vue";
import TheVision from "../components/company/TheVision.vue";
import TheTeam from "../components/company/TheTeam.vue";
import ChooseUs from "../components/company/ChooseUs.vue";

export default {
  name: "CompanyPage",
  layout: "main",
  components: {
    TheAbout,
    TheMission,
    TheValues,
    TheVision,
    TheTeam,
    ChooseUs,
    ThePageHeader,
  },
};
</script>
