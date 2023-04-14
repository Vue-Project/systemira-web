<template>
  <div class="page-header bg-blue">
    <div class="container">
      <h1>{{$t("web.Page Header Titel")}}

      </h1>
      <p>
        {{$t("web.Page Header Text")}} </p>
      <figure>
        <img src="~/assets/images/web-header.png" alt="Turning ideas into websites" />
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
