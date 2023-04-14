<template>
  <section class="common-section">
    <header class="section-header">
      <div class="container">
        <h2>{{ $t("company.About Us") }}</h2>
      </div>
    </header>

    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <div class="about-text">
            <h3>{{ $t("company.Corpita closely") }}</h3>
            <p>
              <strong>{{ $t("company.Corpita") }}</strong>
              {{ $t("company.Corpita Text") }}
            </p>
            <p>
              <strong>{{ $t("company.Our passion") }} </strong
              >{{ $t("company.Our passion text") }}
            </p>
            <p>
              <strong>{{ $t("company.As we grow") }},</strong>
              {{ $t("company.As we grow text") }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <figure class="about-thumb right">
            <img src="~/assets/images/company-about.png" alt="Corpita closely" />
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
