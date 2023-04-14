<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <div class="about-text">
            <h3>  {{ $t("ux-ui.No Bouncing") }}</h3>
            <p>
              {{ $t("ux-ui.No Bouncing Text One") }}
            </p>
            <p>
              {{ $t("ux-ui.No Bouncing Text Two") }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <figure class="about-thumb right">
            <img src="~/assets/images/uiux-bouncing.png" alt="No more bouncing" />
          </figure>
        </div>
      </div>
    </div>
  </section>
  
  
</template>

<script>
export default {
  name: "TheAbout",
  layout: "component",
};
</script>

<style></style>
