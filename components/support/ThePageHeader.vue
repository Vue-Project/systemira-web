<template>
  <div class="page-header bg-blue">
    <div class="container">
      <h1>{{ $t("support.Page Header Titel") }}</h1>
      <p>
        {{ $t("support.Page Header Text") }}
      </p>
      <figure>
        <img src="~/assets/images/support-header.png" alt="Professional, modern and reliable support" />
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
