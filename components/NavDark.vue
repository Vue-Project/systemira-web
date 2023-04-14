<template>
  <header id="main-header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <!-- Brand -->
        <NuxtLink class="navbar-brand" :to="localePath('/')">
          <img :src="logoImage" class="navbar-brand-img" alt="Corptia Logo" />
        </NuxtLink>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- Toggler -->

          <!-- Navigation -->
          <ul class="navbar-nav m-auto">
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :to="localePath('/')"
                exact
                exact-active-class="active"
                active-class="active"
              >
                {{ $t("header.Home") }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :to="localePath('/company')"
                exact-active-class="active"
                active-class="active"
              >
                {{ $t("header.Company") }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :to="localePath('/services')"
                exact-active-class="active"
                active-class="active"
              >
                {{ $t("header.Services") }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :to="localePath('/works')"
                exact-active-class="active"
                active-class="active"
              >
                {{ $t("header.Works") }}
              </NuxtLink>
            </li>
            <!-- <li class="nav-item">
             
              <NuxtLink class="nav-link" to="/blog" exact-active-class="active"
                active-class="active">  $t("header.Blog")</NuxtLink>
            </li> -->
          </ul>

          <div class="switch-lang">
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <i class="fas fa-globe"></i>

              {{ locale.code }}
            </nuxt-link>
          </div>

          <!-- button contact -->
          <a :href="localePath('/Contact')" target="_blank" class="btn-main">
            <span> {{ $t("header.Contact") }} </span>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import logoEn from "../assets/images/logo.png";
import logoAr from "../assets/images/arabic/logo-light.png";

export default {
  name: "NavDark",
  layout: "component",
  data() {
    return {};
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
    logoImage() {
      if (this.$i18n.locale === "EN") {
        return logoEn;
      } else if (this.$i18n.locale === "AR") {
        return logoAr;
      }
    },
  },
};
</script>

<style></style>
