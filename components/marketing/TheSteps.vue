<template>
  <section class="common-section">
    <div class="container">
      <div class="row center">
        <div class="col-md-6">
          <figure class="about-thumb ">
            <img src="~/assets/images/marketing-steps.png" alt="Be the best answer for your customers online" />
          </figure>
        </div>
        <div class="col-md-6">
          <div class="steps-list">
            <h3>{{$t("marketing.Customers Online")}}</h3>
            <h5>{{$t("marketing.Customers Online Text")}}
            </h5>
            <ul>
              <li>
                <h6>{{$t("marketing.Digital Marketing")}}</h6>
                <p>
                  {{$t("marketing.Digital Marketing Text")}}
                </p>
              </li>
              <li>
                <h6>{{$t("marketing.Content Marketing")}}</h6>
                <p>
                  {{$t("marketing.Content Marketing Text")}}
                </p>
              </li>
              <li>
                <h6>{{$t("marketing.SEO")}}</h6>
                <p>
                  {{$t("marketing.SEO Text")}}
                </p>
              </li>
              <li>
                <h6>M{{$t("marketing.Media Buying")}}</h6>
                <p>
                  {{$t("marketing.Media Buying Text")}}
                </p>
              </li>
              <li>
                <h6>{{$t("marketing.Social Media")}}</h6>
                <p>
                  {{$t("marketing.Social Media Text")}}
                </p>
              </li>
              <li>
                <h6>{{$t("marketing.Media Production")}}</h6>
                <p>
                  {{$t("marketing.Media Production Text")}}
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
