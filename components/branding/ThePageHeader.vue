<template>
  <div class="page-header bg-blue">
    <div class="container">
      <h1>{{ $t("branding.Page Header Titel") }}
      </h1>
      <p>
        {{ $t("branding.Page Header Text") }} </p>
      <figure>
        <img src="~/assets/images/branding-header.png" alt="We don’t create brands, we create experiences" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThePageHeader',
  layout: 'Component'
};
</script>

<style>

</style>
