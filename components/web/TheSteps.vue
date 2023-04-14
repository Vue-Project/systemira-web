<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <figure class="about-thumb">
            <img src="~/assets/images/web-services.png" alt="We don’t just code, we do what’s right for your project" />
          </figure>
        </div>
        <div class="col-md-6">
          <div class="steps-list">
            <h3>{{ $t("web.what’s right") }}</h3>
            <h5>
              {{ $t("web.what’s right Text") }}
            </h5>
            <ul>
              <li>
                <h6>{{ $t("web.Landing Page") }}</h6>
                <p>
                  {{ $t("web.Landing Page Text") }}
                </p>
              </li>
              <li>
                <h6>{{ $t("web.Wordpress Website") }}</h6>
                <p>
                  {{ $t("web.Wordpress Website Text") }}
                </p>
              </li>
              <li>
                <h6>{{ $t("web.Custom Website") }}</h6>
                <p>
                  {{ $t("web.Custom Website Text") }}
                </p>
              </li>
              <li>
                <h6>{{ $t("web.Shopify Websites") }}</h6>
                <p>
                  {{ $t("web.Shopify Websites Text") }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheSteps",
  layout: "component",
};
</script>

<style></style>
