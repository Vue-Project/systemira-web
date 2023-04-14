<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-8">
          <div class="about-text">
            <h3>{{ $t("support.Helping You") }}</h3>
            <div class="row">
              <div class="col-md-6">
                <figure class="about-thumb">
                  <img
                    src="~/assets/images/planning-help.png"
                    alt="Discovery and planning"
                  />
                </figure>

                <h5>{{ $t("support.Discovery planning")}}</h5>
                <p>
                  {{ $t("support.Discovery planning Text") }}
                </p>
              </div>
              <div class="col-md-6">
                <figure class="about-thumb">
                  <img
                    src="~/assets/images/updateing-help.png"
                    alt="Checking and Updating"
                  />
                </figure>
                <h5>{{ $t("support.Checking Updating") }}</h5>
                <p>
                  {{ $t("support.Checking Updating Text") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <figure class="about-thumb offset-md-2">
            <img
              src="~/assets/images/support-help.png"
              alt="How can we help you?"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHelp",
  layout: "component",
};
</script>

<style></style>
