<template>
  <div>
    <section class="common-section">
      <div class="container">
        <header class="section-header">
          <h2> {{ $t("ux-ui.UI UX Include") }}</h2>
        </header>
        <div class="ui-ux">
          <img :src="UiuxImage" alt="ui-ux" />
        </div>
      </div>
    </section>
    <section class="common-section bg-gray">
      <div class="container">
        <div class="uiux">
        <div class="row center">
          <div class="col-md-6">
            <figure class="about-thumb ">
              <img src="~/assets/images/uiux-services.png" alt="UI and UX are both in mind." />
            </figure>
          </div>
          <div class="col-md-6">
            <div class="about-text">
              <h3> {{ $t("ux-ui.Both In Mind") }}</h3>
              <p>
                {{ $t("ux-ui.Both In Mind Text") }}
              </p>
            </div>
          </div>
        </div>
      </div>
        <div class="uiux-mobile">
        <div class="row center">
       
          <div class="col-md-6">
            <div class="about-text">
              <h3> {{ $t("ux-ui.Both In Mind") }}</h3>
              <p>
                {{ $t("ux-ui.Both In Mind Text") }}
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <figure class="about-thumb right">
              <img src="~/assets/images/uiux-services.png" alt="UI and UX are both in mind." />
            </figure>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import UiuxEN from "../../assets/images/ui-ux.png";
import UiuxAr from "../../assets/images/uiux-arabic.png";
export default {
  name: "UiUX",
  layout: "component",
  computed: {
    UiuxImage() {
      if (this.$i18n.locale === "EN") {
        return UiuxEN;
      } else if (this.$i18n.locale === "AR") {
        return UiuxAr;
      }
    },
  },
};
</script>

<style></style>
