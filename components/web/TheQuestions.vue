<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img  src="~/assets/images/questions-01.png" alt="why?" />

          </figure>
          <h5>{{ $t("web.Why") }}</h5>
            <ul>
              <li>{{ $t("web.Why One") }}</li>
              <li>{{ $t("web.Why Two") }}</li>
              <li>{{ $t("web.Why There") }}</li>
              <li>{{ $t("web.Why Four") }}</li>
              <li>{{ $t("web.Why Five") }}</li>
              <li>{{ $t("web.Why Six") }}</li>
            </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img  src="~/assets/images/questions-02.png" alt="who?" />

          </figure>
          <h5>{{ $t("web.Who") }}</h5>
            <ul>
              <li>{{ $t("web.Who One") }}</li>
              <li>{{ $t("web.Who Two") }}</li>
              <li>{{ $t("web.Who There") }}</li>
              <li>{{ $t("web.Who Four") }}</li>
              <li> {{ $t("web.Who Five") }}</li>
              <li>{{ $t("web.Who Six") }}</li>
              </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item-box">
          <figure>
            <img  src="~/assets/images/questions-03.png" alt="what?" />

          </figure>
          <h5>{{ $t("web.What") }}</h5>

          <ul>
              <li>{{ $t("web.what One") }}</li>
              <li>{{ $t("web.what Two") }}</li>
              <li>{{ $t("web.what There") }}</li>
              <li>{{ $t("web.what Four") }}</li>
              <li> {{ $t("web.what Five") }}</li>
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
