<template>
  <section class="common-section">
    <div class="container">
      <header class="section-title">
        <h3>{{ $t("mobile apps.Mobile Applications") }}</h3>
        <p>
          {{ $t("mobile apps.Mobile Applications Text") }}
        </p>
      </header>
      <div class="row mb-30">
        <div class="col-md-6">
          <div class="item-box mobile-app">
            <figure>
              <img src="~/assets/images/android-app.png" alt="android-app" />
            </figure>
            <h5>{{ $t("mobile apps.Android Apps") }}</h5>
            <p>
              {{ $t("mobile apps.Android Apps Text") }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="item-box mobile-app">
            <figure>
              <img src="~/assets/images/ios-app.png" alt="ios-app" />
            </figure>
            <h5>{{ $t("mobile apps.Ios Apps") }}</h5>
            <p>
              {{ $t("mobile apps.Ios Apps Text") }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="item-box mobile-app">
            <figure>
              <img src="~/assets/images/hybrid-app.png" alt="hybrid-app" />
            </figure>
            <h5>{{ $t("mobile apps.Hybrid Apps") }}</h5>
            <p>
              {{ $t("mobile apps.Hybrid Apps Text") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MobileApplications",
  layout: "Component",
};
</script>

<style></style>
