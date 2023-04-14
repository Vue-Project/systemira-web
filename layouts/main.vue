<template>
  <div>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import { CursorFx } from "@luxdamore/vue-cursor-fx";

export default {
  components: { CursorFx },
  methods: {
  switchLanguage (language) {
    this.$i18n.locale = language
    this.$cookies.set('language', language)
  }
}
,
 

  

  // updateing lang
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },

  created() {
    this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
      this.$nuxt.$root.$set(this.$nuxt.$root.$options.head, "htmlAttrs", {
        lang: newLocale,
      });
    };
  },
};
</script>

<style src="@luxdamore/vue-cursor-fx/dist/CursorFx.css"></style>
