<template>
  <div class="page-header bg-blue">
    <div class="container">
      <h1>{{ $t("ux-ui.Page Header Titel") }}</h1>
      <p>
        {{ $t("ux-ui.Page Header Text") }}
      </p>
      <figure>
        <img
          src="~/assets/images/uxui-header.png"
          alt="We humanize technology"
        />
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
