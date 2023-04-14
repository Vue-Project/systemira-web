<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-8">
          <div class="about-text">
            <h3>{{ $t("branding.Craft Brand") }}</h3>
            <h4>{{ $t("branding.Craft Brand Text") }}</h4>
            <ul class="elements-list">
              <li>
                {{ $t("branding.Question one") }}
              </li>
              <li>
                {{ $t("branding.Question Two") }}
              </li>
              <li>{{ $t("branding.Question There") }}</li>
            </ul>
            <h5>
              {{ $t("branding.Question Answer") }}
            </h5>
            <a href="/contact" target="_blank" class="btn-main ">
              <span>{{ $t("branding.Talk To Expert") }}</span>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <figure class="about-thumb right">
            <img
              src="~/assets/images/branding-craf.png"
              alt="Let’s craft your brand"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheCraft",
  layout: "component",
};
</script>

<style></style>
