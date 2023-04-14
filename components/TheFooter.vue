<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row center">
          <div class="col-lg-6 col-md-12">
            <h1>
              {{ $t("footer.Join Our") }}
              <strong>{{ $t("footer.Newsletter") }}</strong>
              {{ $t("footer.Get Updated") }}
            </h1>
          </div>
          <div class="col-lg-6 col-md-12">
            <form class="form-inline">
              <div class="form-group w-100">
                <input
                  type="text"
                  class="form-control w-100 mb-0"
                  :placeholder="$t('footer.Enter your email')"
                />
                <p>{{ $t("footer.Email note") }}</p>
              </div>
              <button type="submit" class="btn btn-main">
                {{ $t("footer.Subscribe") }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="widget-item">
              <div class="footer-about">
                <img
                  class="logo-footer"
                  :src="logoImage"
                  alt="Logo"
                />
                <p>
                  {{ $t("footer.Corptia about") }}
                </p>
                <SocialMedia />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row end">
              <div class="col-md-4">
                <div class="widget-item">
                  <h4>{{ $t("footer.Links") }}</h4>
                  <ul class="footer-links">
                    <li>
                      <a :href="localePath('/')">{{ $t("footer.Home") }}</a>
                    </li>
                    <li>
                      <a :href="localePath('/Company')">{{
                        $t("footer.Company")
                      }}</a>
                    </li>
                    <li>
                      <a :href="localePath('/Services')">{{
                        $t("footer.Services")
                      }}</a>
                    </li>
                    <li>
                      <a :href="localePath('/works')">{{
                        $t("footer.Work")
                      }}</a>
                    </li>
                    <!-- <li>
                      <a :href="localePath('/Blog')"
                        >{{ $t("footer.Blog") }}
                      </a>
                    </li> -->
                    <li>
                      <a :href="localePath('/Contact')">
                        {{ $t("footer.Contact Us") }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4">
                <div class="widget-item">
                  <h4>{{ $t("footer.Services") }}</h4>
                  <ul class="footer-links">
                    <li>
                      <a :href="localePath('/services/branding')">{{
                        $t("footer.Branding")
                      }}</a>
                    </li>
                    <li>
                      <a :href="localePath('/services/mobile')">
                        {{ $t("footer.Mobile Apps") }}</a
                      >
                    </li>
                    <li>
                      <a :href="localePath('/services/marketing')">{{
                        $t("footer.Marketing")
                      }}</a>
                    </li>
                    <li>
                      <a :href="localePath('/services/web')">
                        {{ $t("footer.Web Development") }}</a
                      >
                    </li>
                    <li>
                      <a :href="localePath('/services/uxui')">{{
                        $t("footer.UI&UX Design")
                      }}</a>
                    </li>
                    <li>
                      <a :href="localePath('/services/support')">{{
                        $t("footer.Support & Development")
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4">
                <div class="widget-item">
                  <h4>{{ $t("footer.Legal") }}</h4>
                  <ul class="footer-links">
                    <li>
                      <a href="#">{{ $t("footer.Terms of use") }}</a>
                    </li>
                    <li>
                      <a href="#">{{ $t("footer.Terms & conditions") }}</a>
                    </li>
                    <li>
                      <a href="#">{{ $t("footer.Privacy policy") }}</a>
                    </li>
                    <li>
                      <a href="#">{{ $t("footer.Cookie policy") }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-divider">
      <div class="container">
        <div class="divider-line"></div>
      </div>
    </div>

    <div class="copyright">
      <p> {{ $t("footer.Copy Right")}}{{ currentYear }} {{ $t("footer.All Right")}}</p>
    </div>
  </footer>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
import logoEn from "../assets/images/logo.png";
import logoAr from "../assets/images/arabic/logo-light.png";
export default {
  name: "TheFooter",
  layout: "component",

  components: {
    SocialMedia,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
   
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
