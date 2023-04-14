<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <div class="about-text">
            <h3>{{ $t("branding.Without Speaking") }}</h3>
            <p>
              {{ $t("branding.Without Speaking Text") }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <figure class="about-thumb right">
            <img src="~/assets/images/company-vision.png" alt="Speak without speaking" />
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

<style>
</style>
