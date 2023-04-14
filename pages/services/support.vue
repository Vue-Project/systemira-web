<template>
  <div>
    <NavDark />
    <ThePageHeader />
    <TheAbout />
    <MaintenanceService />
    <TheSlogan />
    <TheHelp />
    <TheUpdate />
  </div>
</template>

<script>
import ThePageHeader from "../../components/support/ThePageHeader.vue";
import TheAbout from "../../components/support/TheAbout.vue";
import TheSlogan from "../../components/support/TheSlogan.vue";
import MaintenanceService from "../../components/support/MaintenanceService.vue";
import TheHelp from "../../components/support/TheHelp.vue";
import TheUpdate from "../../components/support/TheUpdate.vue";
import TheWorks from "../../components/TheWorks.vue";

export default {
  name: "Services",
  layout: "main",
  components: {
    ThePageHeader,
    TheAbout,
    MaintenanceService,
    TheSlogan,
    TheWorks,
    TheHelp,
    TheUpdate
  },
};
</script>
