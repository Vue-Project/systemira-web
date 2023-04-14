<template>
  <div>
    <NavDark />
    <ThePageHeader />

    <section class="common-section services services-01">
      <div class="container">
        <header class="section-title">
          <h3>{{ $t("home.Services We Provide") }}</h3>
          <p>
            {{ $t("our service.Services Provide Text") }}
          </p>
        </header>
        <div class="row">
          <div class="col-md-4">
            <div class="service-item">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-01.png"
                  alt="Branding"
                />
              </figure>
              <h2>{{ $t("home.Branding") }}</h2>
              <p>
                {{ $t("our service.Branding Text") }}
              </p>
              <NuxtLink :to="localePath('/services/branding')"
                >{{ $t("our service.Read More") }}
                <i class="fas fa-long-arrow-alt-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-02.png"
                  alt="Mobile Apps"
                />
              </figure>
              <h2>{{ $t("home.Mobile Apps") }}</h2>
              <p>
                {{ $t("our service.Mobile Apps Text") }}
              </p>
              <NuxtLink :to="localePath('/services/mobile')"
                >{{ $t("our service.Read More") }}
                <i class="fas fa-long-arrow-alt-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-03.png"
                  alt="UX&UI Design"
                />
              </figure>
              <h2>{{ $t("home.UI&UX Design") }}</h2>
              <p>
                {{ $t("our service.UI&UX Design Text") }}
              </p>
              <NuxtLink :to="localePath('/services/uxui')"
                >{{ $t("our service.Read More")
                }}<i class="fas fa-long-arrow-alt-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service-item">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-04.png"
                  alt="Web Apps"
                />
              </figure>
              <h2>{{ $t("home.Web Development") }}</h2>
              <p>
                {{ $t("our service.Web Developmet Text") }}
              </p>
              <NuxtLink :to="localePath('/services/web')"
                >{{ $t("our service.Read More") }}
                <i class="fas fa-long-arrow-alt-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-06.png"
                  alt="Support & Development"
                />
              </figure>
              <h2>{{ $t("home.Support & Development") }}</h2>
              <p>{{ $t("our service.Support Development Text") }}.</p>
              <NuxtLink :to="localePath('/services/support')"
                >{{ $t("our service.Read More")
                }}<i class="fas fa-long-arrow-alt-right"></i
              ></NuxtLink>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure class="service-icon">
                <img
                  src="~/assets/images/services/service-05.png"
                  alt="Digital Marketing"
                />
              </figure>
              <h2>{{ $t("home.Marketing") }}</h2>
              <p>
                {{ $t("our service.Digital Marketing Text") }}
              </p>
              <NuxtLink :to="localePath('/services/marketing')"
                >{{ $t("our service.Read More")
                }}<i class="fas fa-long-arrow-alt-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="common-section bg-gray">
      <div class="container">
        <div class="row center">
          <div class="col-md-7">
            <div class="about-text">
              <h3>{{ $t("our service.deliver success") }}</h3>
            </div>
            <ul class="items-list mb-60">
              <li>
                <span class="number-marker"> 1</span>
                <p>{{ $t("our service.deliver success One") }}</p>
              </li>
              <li>
                <span class="number-marker"> 2</span>
                <p>{{ $t("our service.deliver success Two") }}</p>
              </li>
              <li>
                <span class="number-marker"> 3</span>
                <p>
                  {{ $t("our service.deliver success There") }}
                </p>
              </li>
              <li>
                <span class="number-marker"> 4</span>
                <p>{{ $t("our service.deliver success Four") }}</p>
              </li>
              <li>
                <span class="number-marker"> 5</span>
                <p>{{ $t("our service.deliver success Five") }}</p>
              </li>
              <li>
                <span class="number-marker"> 6</span>
                <p>{{ $t("our service.deliver success Six") }}</p>
              </li>
            </ul>
          </div>
          <div class="col-md-5">
            <figure class="about-thumb offset-md-2">
              <img src="~/assets/images/company-team.png" alt="Work 1" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <TheSlogan />

    <TheLastPosts />
    <TheProjects />
  </div>
</template>

<script>
import ThePageHeader from "../../components/ThePageHeader.vue";
import TheWorks from "../../components/TheWorks.vue";
import ChooseUs from "../../components/company/ChooseUs.vue";
import TheSlogan from "../../components/services/TheSlogan.vue";

export default {
  name: "Services",
  layout: "main",
  components: { ThePageHeader, TheWorks, ChooseUs, TheSlogan },
};
</script>
