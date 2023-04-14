<template>
  <section class="common-section bg-gray">
    <div class="container">
      <div class="row center">
        <div class="col-md-5">
          <figure class="about-thumb">
            <img src="~/assets/images/company-team.png" alt="image " />
          </figure>
        
        </div>
        <div class="col-md-7">
          <div class="item-text">
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
  layout:'component'
 
};</script>
<style></style>
