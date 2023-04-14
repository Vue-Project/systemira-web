<template>
  <section class="common-section">
    <div class="container">
      <div class="update">
      <div class="row center">
        <div class="col-md-6">
          <figure class="about-thumb">
            <img src="~/assets/images/website-updateing.png" alt="Get the most out of your website" />
          </figure>
        </div>
        <div class="col-md-6">
          <div class="about-text">
            <h3>{{ $t("support.Get The Most") }}</h3>
            <p>
              {{ $t("support.Get The Most Text") }}
            </p>
            <a href="/contact" target="_blank" class="btn-main ">
              <span>{{ $t("header.Contact") }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
      <div class="update-mobile">
      <div class="row center">
     
        <div class="col-md-6">
          <div class="about-text">
            <h3>{{ $t("support.Get The Most") }}</h3>
            <p>
              {{ $t("support.Get The Most Text") }}
            </p>
            <a href="/contact" target="_blank" class="btn-main ">
              <span>{{ $t("header.Contact") }}</span>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <figure class="about-thumb">
            <img src="~/assets/images/website-updateing.png" alt="Get the most out of your website" />
          </figure>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHelp",
  layout: "component",
};
</script>

<style></style>
