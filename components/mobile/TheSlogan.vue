<template>
  <section class="slogan-section bg-liner">
    <div class="container">
      <h3>
        {{ $t("mobile apps.Slogan") }}
      </h3>
      <a :href="localePath('/Contact')" target="_blank" class="btn-main btn-contact">
        <span>{{ $t("header.Contact") }}</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheSlogan",
  layout: "component",
};
</script>

<style></style>
