<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <figure class="about-thumb">
            <img src="~/assets/images/branding-time.png" alt="Branding for one time only" />
          </figure>
        </div>

        <div class="col-md-6">
          <div class="about-text">
            <h3>{{ $t("branding.Time Only") }}</h3>
            <p>
              {{ $t("branding.Time Only Text") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheTime",
  layout: "component",
};
</script>

<style></style>
