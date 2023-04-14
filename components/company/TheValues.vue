<template>
  <section class="common-section">
    <header class="section-header">
      <div class="container">
        <h2>   {{ $t("company.Values") }}</h2>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="service-item">
            <figure class="service-icon">
              <img
                src="~/assets/images/values/value-01.png"
                alt="Team not Person"
              />
            </figure>
            <h5>   {{ $t("company.Team Not Person") }}</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <figure class="service-icon">
              <img
                src="~/assets/images/values/value-02.png"
                alt="Strong Relationships&UX"
              />
            </figure>
            <h5>   {{ $t("company.Strong Relationships") }}</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <figure class="service-icon">
              <img
                src="~/assets/images/values/value-03.png"
                alt="Quality Not Quantity"
              />
            </figure>
            <h5>   {{ $t("company.Quality Not Quantity") }}</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="service-item">
            <figure class="service-icon">
              <img
                src="~/assets/images/values/value-04.png"
                alt="Accuracy and Quickness "
              />
            </figure>
            <h5>   {{ $t("company.Accuracy And Quickness") }}</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <figure class="service-icon">
              <img
                src="~/assets/images/values/value-05.png"
                alt="Passion and Responsibility "
              />
            </figure>
            <h5>   {{ $t("company.Passion And Responsibility") }}</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <figure class="service-icon">
              <img
                src="~/assets/images/values/value-06.png"
                alt="Happiness and Prosperity"
              />
            </figure>
            <h5>   {{ $t("company.Happiness And Prosperity") }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheValues",
  layout: "component",
};
</script>

<style></style>
