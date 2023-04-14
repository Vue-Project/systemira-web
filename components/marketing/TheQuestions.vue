<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img  src="~/assets/images/questions-01.png" alt="why?" />

          </figure>
          <h5>{{ $t("marketing.Why") }}</h5>
            <ul>
              <li>{{ $t("marketing.Why One") }}</li>
              <li>{{ $t("marketing.Why Two") }}</li>
              <li>{{ $t("marketing.Why There") }}</li>
              <li>{{ $t("marketing.Why Four") }}</li>
              <li>{{ $t("marketing.Why Five") }}</li>
            </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img  src="~/assets/images/questions-02.png" alt="Who?" />

          </figure>
          <h5>{{ $t("marketing.Who") }}</h5>
            <ul>
              <li>{{ $t("marketing.Who One") }}</li>
              <li>{{ $t("marketing.Who Two") }}</li>
              <li>{{ $t("marketing.Who There") }}</li>
              <li>{{ $t("marketing.Who Four") }}</li>
              <li> {{ $t("marketing.Who Five") }}</li>
              <li>{{ $t("marketing.Who Six") }}</li>
              </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img  src="~/assets/images/questions-03.png" alt="what?" />

          </figure>
          <h5>{{ $t("marketing.what") }}</h5>
            <ul>
              <li>{{ $t("marketing.what One") }}</li>
              <li>{{ $t("marketing.what Two") }}</li>
              <li>{{ $t("marketing.what There") }}</li>
              <li>{{ $t("marketing.what Four") }}</li>
              <li> {{ $t("marketing.what Five") }}</li>
              <li>{{ $t("marketing.what Six") }}</li>
              </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheQuestions",
  layout: "Component",
};
</script>

<style></style>
