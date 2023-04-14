<template>
  <div>
    <NavLight />
    <ThePageHeader />
    <TheForm />

   
  </div>
</template>

<script>
import ThePageHeader from "../components/contact/ThePageHeader.vue";
import TheForm from "../components/contact/TheForm.vue";
import NavLight from "../components/NavlLIght.vue";

export default {
  components: {
    ThePageHeader,
    TheForm,
    NavLight,
  },
  name: "ContactPage",
  layout: "main",
};
</script>
