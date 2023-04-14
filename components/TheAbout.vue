<template>
  <section class="common-section bg-gray">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <div class="about-text">
            <h3>{{ $t("home.Our Story") }}</h3>
            <p>
              {{ $t("home.Story Text One") }}
            </p>

            <p>
              {{ $t("home.Story Text Two") }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <figure class="about-thumb right">
            <img src="~/assets/images/company-about.png" alt="Work 1" />
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
