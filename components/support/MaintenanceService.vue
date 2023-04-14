<template>
  <div>
    <div class="container">
      <div class="support">
        <div class="row center">
          <div class="col-md-5">
            <figure class="about-thumb">
              <img
                src="~/assets/images/maintenance-service.png"
                alt="Why do you need maintenance service?"
              />
            </figure>
          </div>
          <div class="col-md-7">
            <div class="about-text">
              <h3>
                {{ $t("support.Why Need") }}
              </h3>
              <ul class="items-list">
                <li>
                  <span class="number-marker"> 1</span>
                  <p>
                    {{ $t("support.Why Need One") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 2</span>
                  <p>
                    {{ $t("support.Why Need Two") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 3</span>
                  <p>
                    {{ $t("support.Why Need There") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 4</span>
                  <p>
                    {{ $t("support.Why Need Four") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 5</span>
                  <p>
                    {{ $t("support.Why Need Five") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 6</span>
                  <p>
                    {{ $t("support.Why Need Six") }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="support-mobile">
        <div class="row center">
         
          <div class="col-md-7">
            <div class="about-text">
              <h3>
                {{ $t("support.Why Need") }}
              </h3>
              <ul class="items-list">
                <li>
                  <span class="number-marker"> 1</span>
                  <p>
                    {{ $t("support.Why Need One") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 2</span>
                  <p>
                    {{ $t("support.Why Need Two") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 3</span>
                  <p>
                    {{ $t("support.Why Need There") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 4</span>
                  <p>
                    {{ $t("support.Why Need Four") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 5</span>
                  <p>
                    {{ $t("support.Why Need Five") }}
                  </p>
                </li>
                <li>
                  <span class="number-marker"> 6</span>
                  <p>
                    {{ $t("support.Why Need Six") }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-5">
            <figure class="about-thumb">
              <img
                src="~/assets/images/maintenance-service.png"
                alt="Why do you need maintenance service?"
              />
            </figure>
          </div>
        
        </div>
      </div>
    </div>
    <section class="common-section">
      <div class="container">
          <div class="row center">
            <div class="col-md-6">
              <div class="about-text maintenance-service">
                <h3>{{ $t("support.Who needs") }}</h3>

                <ul class="items-list">
                  <li>
                    <img
                      src="~/assets/images/website.png"
                      alt="Website Owners"
                    />

                    <p>{{ $t("support.Who needs Website") }}</p>
                  </li>
                  <li>
                    <img
                      src="~/assets/images/mobile-app.png"
                      alt="Mobile Apps Owners"
                    />
                    <p>{{ $t("support.Who needs App") }}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <figure class="about-thumb right">
                <img
                  src="~/assets/images/web-about.png"
                  alt="Who needs maintenance service?"
                />
              </figure>
            </div>
          </div>
        
        
      </div>
    </section>

    <section class="common-section bg-gray">
      <div class="container">
        <div class="maintenance-services">
        <div class="row center">
          <div class="col-md-6">
            <figure class="about-thumb right">
              <img
                src="~/assets/images/maintenance-list.png"
                alt="What does maintenance service include?"
              />
            </figure>
          </div>
          <div class="col-md-6">
            <div class="about-text maintenance-content">
              <h3>{{ $t("support.service Include") }}</h3>
              <p>{{ $t("support.service Include Text") }}</p>

              <ul class="elements-list">
                <li>{{ $t("support.Links") }}</li>
                <li>{{ $t("support.Forms") }}</li>
                <li>{{ $t("support.single Pages") }}</li>
                <li>{{ $t("support.Photos Images") }}</li>
                <li>{{ $t("support.Downloadable Files") }}</li>
                <li>{{ $t("support.Animations Videos") }}</li>
                <li>{{ $t("support.Navigating Elements") }}</li>
                <li>{{ $t("support.Text") }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        <div class="maintenance-mobile">
        <div class="row center">
         
          <div class="col-md-6">
            <div class="about-text maintenance-content">
              <h3>{{ $t("support.service Include") }}</h3>
              <p>{{ $t("support.service Include Text") }}</p>

              <ul class="elements-list">
                <li>{{ $t("support.Links") }}</li>
                <li>{{ $t("support.Forms") }}</li>
                <li>{{ $t("support.single Pages") }}</li>
                <li>{{ $t("support.Photos Images") }}</li>
                <li>{{ $t("support.Downloadable Files") }}</li>
                <li>{{ $t("support.Animations Videos") }}</li>
                <li>{{ $t("support.Navigating Elements") }}</li>
                <li>{{ $t("support.Text") }}</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <figure class="about-thumb right">
              <img
                src="~/assets/images/maintenance-list.png"
                alt="What does maintenance service include?"
              />
            </figure>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MaintenanceService",
  layout: "component",
};
</script>

<style></style>
