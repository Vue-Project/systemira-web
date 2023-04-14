<template>
  <section class="slogan-section bg-liner text-center">
      <div class="container">
        <h3>{{ $t("branding.Slogan") }} </h3>
        <a :href="localePath('/Contact')" target="_blank" class="btn-main btn-contact ">
          <span>{{ $t("branding.Talk To Expert") }}</span>
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
