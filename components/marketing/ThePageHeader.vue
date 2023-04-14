<template>
  <div class="page-header bg-blue">
    <div class="container">
      <h1>{{$t("marketing.Page Header Titel")}}</h1>
      <p>
        {{$t("marketing.Page Header Text")}}
      </p>
      <figure>
        <img src="~/assets/images/marketing-header.png" alt="Marketing is your business voice" />
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
