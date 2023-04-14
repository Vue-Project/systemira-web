<template>
  <div>
    <section class="common-section">
      <div class="container">
        <div class="row center">
          <div class="col-md-7">
            <div class="item-text">
              <h3>{{ $t("company.Professional Team only") }}</h3>
              <p>
                {{ $t("company.Professional Team Text One") }}
              </p>
              <p>
                {{ $t("company.Professional Team Text Two") }}
              </p>
              <h5>{{ $t("company.Feeling excited") }}</h5>
              <a :href="localePath('/Contact')" target="_blank" class="btn-main">
                <span> {{ $t("header.Contact") }}</span>
              </a>
            </div>
          </div>
          <div class="col-md-5">
            <figure class="about-thumb right">
              <img src="~/assets/images/choose-us.png" alt="company team " />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import CountTo from "vue-count-to";

export default {
  components: { CountTo },

  name: "ChosseUS",
  layout: "component",
};
</script>
<style></style>
