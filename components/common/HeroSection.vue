<template>
  <section id="hero" class="">
    <div class="container">
      <div class="row center">
        <div class="col-md-5">
          <div class="hero-text">
            <div class="hero">
              <h1>{{ $t("home.Shaping Titel") }}</h1>
              <p>
                {{ $t("home.Shaping Text") }}
              </p>
              <a :href="localePath('/company')" target="_blank" class="btn-main">
                <span> {{ $t("home.Discovery") }} </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 offset-md-1">
          <figure class="w-100">
            <img
              alt="Image placeholder"
              src="~/assets/images/hero.png"
              class="img-fluid mw-md-120"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  layout: "component",
};
</script>

<style></style>
