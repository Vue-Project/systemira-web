<template>
  <div class="page-header bg-blue" >
    <div class="container">
      <h1>{{$t("our service.Page Header Titel")}}</h1>
      <p>
        {{$t("our service.Page Header Titel")}}.
      </p>
      <figure>
        <img src="~/assets/images/header-company.png" alt="Digital solutions that help your business grow" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
			mode: {
				type: String
			},
		}
};
</script>

<style>
</style>