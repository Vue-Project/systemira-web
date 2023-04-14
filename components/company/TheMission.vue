<template>
  <section class="common-section bg-gray">
    <div class="container">
      <div class="row center">
        <div class="col-md-7">
          <div class="about-text">
            <h3>{{ $t("company.Mission") }}</h3>
            <p>
              {{ $t("company.Mission Text") }}
            </p>
          </div>
          <ul class="items-list">
            <li >
              <span class="number-marker"> 1</span>
              <p>
                {{ $t("company.Mission Step One") }}
              </p>
            </li>
            <li>
              <span class="number-marker"> 2</span>
              <p>{{ $t("company.Mission Step Two") }}</p>
            </li>
            <li>
              <span class="number-marker"> 3</span>
              <p>
                {{ $t("company.Mission Step There") }}
              </p>
            </li>
            <li >
              <span class="number-marker"> 4</span>
              <p>
                {{ $t("company.Mission Step Four") }}
              </p>
            </li>
          </ul>
        </div>
        <div class="col-md-5">
          <figure class="about-thumb offset-md-2">
            <img src="~/assets/images/company-mision.png" alt="Work 1" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheMission",
  layout:'component',

};
</script>

<style></style>
