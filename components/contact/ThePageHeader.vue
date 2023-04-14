<template>
  <div class="page-header bg-liner">
    <div class="container">
      <h1>{{$t("contact.Page Header Titel")}}</h1>
      <p>
        {{$t("contact.Page Header Text")}}
      </p>

      <figure>
        <img src="~/assets/images/contact-header.png" alt="Let’s corporate!" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name:'ThePageHeader',
  layout:'component',

};
</script>

<style></style>
