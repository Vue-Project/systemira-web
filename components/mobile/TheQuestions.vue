<template>
  <section class="common-section">
    <div class="container">
      <header class="section-title">
        <h3>{{ $t("mobile apps.Acquiesce Customers") }}</h3>
        <p>
          {{ $t("mobile apps.Acquiesce Customers Text") }}
        </p>
      </header>
      <div class="row">
        <div class="col-md-4">
          <div class="item-box">
            <figure>
              <img src="~/assets/images/questions-01.png" alt="why?" />
            </figure>
            <h5>{{ $t("mobile apps.Why") }}</h5>
            <ul>
              <li>{{ $t("mobile apps.Why One") }}</li>
              <li>{{ $t("mobile apps.Why Two") }}</li>
              <li>{{ $t("mobile apps.Why There") }}</li>
              <li>{{ $t("mobile apps.Why Four") }}</li>
              <li>{{ $t("mobile apps.Why Five") }}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item-box">
            <figure>
              <img src="~/assets/images/questions-02.png" alt="who?" />
            </figure>
            <h5>{{ $t("mobile apps.Who") }}</h5>
            <ul>
              <li>{{ $t("mobile apps.Who One") }}</li>
              <li>{{ $t("mobile apps.Who Two") }}</li>
              <li>{{ $t("mobile apps.Who There") }}</li>
              <li>{{ $t("mobile apps.Who Four") }}</li>
              <li> {{ $t("mobile apps.Who Five") }}</li>
              <li>{{ $t("mobile apps.Who Six") }}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item-box">
            <figure>
              <img src="~/assets/images/questions-03.png" alt="what?" />
            </figure>
            <h5>{{ $t("mobile apps.what") }}</h5>
            <ul>
              <li>{{ $t("mobile apps.what One") }}</li>
              <li>{{ $t("mobile apps.what Two") }}</li>
              <li>{{ $t("mobile apps.what There") }}</li>
              <li>{{ $t("mobile apps.what Four") }}</li>
              <li> {{ $t("mobile apps.what Five") }}</li>
              <li>{{ $t("mobile apps.what Six") }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheQuestions",
  layout: "Component",
};
</script>

<style></style>
