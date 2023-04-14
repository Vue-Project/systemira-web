<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <div class="about-text">
            <h3>{{ $t("support.support services") }}</h3>
            <p>
              {{ $t("support.support services Text One") }}
            </p>
            <p>
              {{ $t("support.support services Text Two") }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <figure class="about-thumb right">
            <img
              src="~/assets/images/support-services.png"
              alt="Importance of support services"
            />
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
