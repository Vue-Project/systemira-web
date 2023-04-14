<template>
  <div class="page-header bg-blue">
    <div class="container">
      <h1>{{$t("mobile apps.Page Header Titel")}}</h1>
      <p>
        {{$t("mobile apps.Page Header Text")}}
      </p>
      <figure>
        <img src="~/assets/images/mobile-header.png" alt="From zero to app" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePageHeader",
  layout: "Component",
};
</script>

<style></style>
