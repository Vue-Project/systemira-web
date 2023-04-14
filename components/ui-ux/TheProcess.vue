<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <div class="about-text">
            <h3>{{ $t("ux-ui.Around Process") }}</h3>
            <p>
              {{ $t("ux-ui.Around Process Text") }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <figure class="about-thumb right">
            <img src="~/assets/images/uiux-process.png" alt="Walk around the process" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheProcces",
  layout: "component",
};
</script>

<style></style>
