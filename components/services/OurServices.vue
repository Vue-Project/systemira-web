<template>
  <section class="common-section">
    <header class="section-header">
      <div class="container">
        <span>{{ $t("home.Our Services") }}</span>
        <h2>
          {{ $t("home.Services We Provide") }} <span class="color-line"></span>
        </h2>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="service-item mb-90">
            <a :href="localePath('/services/branding')">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-01.png"
                  alt="Branding"
                />
              </figure>
              {{ $t("home.Branding") }}</a
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item mb-90">
            <a :href="localePath('/services/uxui')">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-03.png"
                  alt=" UI&UX Design"
                />
              </figure>
              {{ $t("home.UI&UX Design") }}</a
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item mb-90">
            <a :href="localePath('/services/web')">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-04.png"
                  alt="Web Apps"
                />
              </figure>
              {{ $t("home.Web Development") }}</a
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="service-item">
            <a :href="localePath('/services/mobile')">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-02.png"
                  alt="Mobile Apps"
                />
              </figure>
              {{ $t("home.Mobile Apps") }}</a
            >
          </div>
        </div>

        <div class="col-md-4">
          <div class="service-item">
            <a :href="localePath('/services/support')">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-06.png"
                  alt="Support & Development"
                />
              </figure>
              {{ $t("home.Support & Development") }}</a
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <a :href="localePath('/services/marketing')">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-05.png"
                  alt="Digital Marketing"
                />
              </figure>
              {{ $t("home.Marketing") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Ourservices",
  layout: "component",
};
</script>

<style></style>
