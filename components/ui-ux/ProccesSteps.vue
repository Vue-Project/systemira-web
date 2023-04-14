<template>
  <div class="container">
    <header class="section-title">
      <h3>{{ $t("ux-ui.Process Steps") }}</h3>
    </header>
    <div class="procces-steps">
      <img :src="ProccesImage" alt="procces steps" />
    </div>
  </div>
</template>

<script>
import ProccesEN from "../../assets/images/procces-steps.png";
import ProccesAr from "../../assets/images/procces-arabic.png";
export default {
  name: "ProccesSteps",
  layout: "component",
  computed: {
    ProccesImage() {
      if (this.$i18n.locale === "EN") {
        return ProccesEN;
      } else if (this.$i18n.locale === "AR") {
        return ProccesAr;
      }
    },
  },
};
</script>

<style></style>
