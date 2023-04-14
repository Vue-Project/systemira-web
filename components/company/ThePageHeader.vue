<template>
  <div class="page-header bg-blue" >
    <div class="container">
      <h1>{{$t("company.Page Header Titel")}}</h1>
      <p>
        {{$t("company.Page Header Text")}}      </p>
      <figure>
        <img src="~/assets/images/header-company.png" alt="Digital solutions that help your business grow" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name:'ThePageHeader',
  layout:'component'
 
};
</script>

<style>
</style>