<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img s src="~/assets/images/questions-01.png" alt="Why?" />
          </figure>
          <h5>{{ $t("branding.Why") }}</h5>
          <ul>
            <li>{{ $t("branding.Why One") }}</li>
            <li>{{ $t("branding.Why Two") }}</li>
            <li>{{ $t("branding.Why There") }}</li>
            <li>{{ $t("branding.Why Four") }}</li>
            <li>{{ $t("branding.Why Five") }}</li>
            <li>{{ $t("branding.Why Six") }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img src="~/assets/images/questions-02.png" alt="Who?" />
          </figure>
          <h5>{{ $t("branding.Who") }}</h5>
          <ul>
            <li>{{ $t("branding.Who One") }}</li>
            <li>{{ $t("branding.Who Two") }}</li>
            <li>{{ $t("branding.Who There") }}</li>
            <li>{{ $t("branding.Who Four") }}</li>
            <li>{{ $t("branding.Who Five") }}</li>
            <li>{{ $t("branding.Who Six") }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img src="~/assets/images/questions-03.png" alt="what?" />
          </figure>
          <h5>{{ $t("branding.What") }}</h5>

          <ul>
            <li>{{ $t("branding.what One") }}</li>
            <li>{{ $t("branding.what Two") }}</li>
            <li>{{ $t("branding.what There") }}</li>
            <li>{{ $t("branding.what Four") }}</li>
            <li>{{ $t("branding.what Five") }}</li>
            <li>{{ $t("branding.what Six") }}</li>
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
