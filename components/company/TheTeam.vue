<template>
  <section class="common-section bg-gray">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5">
          <figure class="about-thumb">
            <img
              src="~/assets/images/good-team.png"
              alt=" We strive to provide a good work environment to help our team
              innovate "
            />
          </figure>
        </div>
        <div class="col-md-7">
          <div class="item-text offset-md-2">
            <h3>
              {{ $t("home.Good environment Title") }}
            </h3>
            <p>
              {{ $t("home.Good environment Text") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "TheTeam",
  layout: "component",
};
</script>
<style></style>
