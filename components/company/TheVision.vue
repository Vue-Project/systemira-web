<template>
  <section class="common-section bg-gray">
    <div class="container">
      <div class="vision">
      <div class="row">
        <div class="col-md-5">
          <figure class="about-thumb">
            <img src="~/assets/images/company-vision.png" alt="Vision" />
          </figure>
        </div>
        <div class="col-md-5 align-self-center offset-md-2">
          <div class="about-text">
            <h3>{{ $t("company.Vision") }}</h3>
            <p>
              {{ $t("company.Vision Text") }}
            </p>
          </div>
        </div>
      </div>
      </div>
      <div class="vision-mobile">
        <div class="row">
        
        <div class="col-md-5 align-self-center ">
          <div class="about-text">
            <h3>{{ $t("company.Vision") }}</h3>
            <p>
              {{ $t("company.Vision Text") }}
            </p>
          </div>
        </div>
          <div class="col-md-5 offset-md-2">
          <figure class="about-thumb ">
            <img src="~/assets/images/company-vision.png" alt="Vision" />
          </figure>
        </div>
        </div>
      </div>
      </div>
   
    </div>
  </section>
</template>

<script>
export default {
  name: "theVision",
  layout: "component",
};
</script>

<style>
</style>