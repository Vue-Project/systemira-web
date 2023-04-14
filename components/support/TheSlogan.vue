<template>
  <section class="slogan-section bg-liner">
    <div class="container">
      <div class="slogan-content">
        <h1>
          {{ $t("support.Slogan") }}
        </h1>
        <a :href="localePath('/Contact')" target="_blank" class="btn-main btn-contact">
          <span> {{ $t("header.Contact") }}</span>
        </a>
      </div>
      <figure class="support-image">
        <img
          src="~/assets/images/support-image.png"
          alt="A successful website or app is impossible without stable and careful support of development process and source code"
        />
      </figure>
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
