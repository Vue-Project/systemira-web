<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <div class="about-text">
            <h3>{{$t("web.website")}}</h3>
            <p>
              {{$t("web.website Text")}}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <figure class="about-thumb right">
            <img src="~/assets/images/web-about.png" alt="It’s time to have a website! " />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheAbout",
  layout: "component",
};
</script>

<style></style>
