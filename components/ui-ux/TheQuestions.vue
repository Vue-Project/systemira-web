<template>
  <section class="common-section">
    <div class="container">
      <header class="section-title">
        <h3>{{ $t("ux-ui.Humanize Technology") }}</h3>
        <p>
          {{ $t("ux-ui.Humanize Technology Text") }}
        </p>
      </header>
      <div class="row">
        <div class="col-md-4">
          <div class="item-box">
            <figure>
              <img s src="~/assets/images/questions-01.png" alt="Why?" />
            </figure>
            <h5>{{ $t("ux-ui.Why") }}</h5>
            <ul>
              <li>{{ $t("ux-ui.Why One") }}</li>
              <li>{{ $t("ux-ui.Why Two") }}</li>
              <li>{{ $t("ux-ui.Why There") }}</li>
              <li>{{ $t("ux-ui.Why Four") }}</li>
              <li>{{ $t("ux-ui.Why Five") }}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item-box">
            <figure>
              <img src="~/assets/images/questions-02.png" alt="Who?" />
            </figure>
            <h5>{{ $t("ux-ui.Who") }}</h5>
            <ul>
              <li>{{ $t("ux-ui.Who One") }}</li>
              <li>{{ $t("ux-ui.Who Two") }}</li>
              <li>{{ $t("ux-ui.Who There") }}</li>
              <li>{{ $t("ux-ui.Who Four") }}</li>
              <li>{{ $t("ux-ui.Who Five") }}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item-box">
            <figure>
              <img src="~/assets/images/questions-03.png" alt="what?" />
            </figure>
            <h5>{{ $t("ux-ui.What") }}</h5>

            <ul>
              <li>{{ $t("ux-ui.what One") }}</li>
              <li>{{ $t("ux-ui.what Two") }}</li>
              <li>{{ $t("ux-ui.what There") }}</li>
              <li>{{ $t("ux-ui.what Four") }}</li>
              <li>{{ $t("ux-ui.what Five") }}</li>
              <li>{{ $t("ux-ui.what Six") }}</li>
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
