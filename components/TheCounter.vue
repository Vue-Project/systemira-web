<template>
  <section ref="counterSection" class="common-section bg-liner">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="counter">
            <span ref="projectCounter">0</span><span>+</span>

            <p>{{ $t("home.Project Done") }}</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="counter">
            <span ref="globalCounter">0</span><span>+</span>

            <p></p>
            <p>{{ $t("home.Global Parterns") }}</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="counter">
            <span ref="awardsCounter">0</span><span>+</span>

            <p></p>
            <p>{{ $t("home.Awards Winning") }}</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="counter">
            <span ref="creativeCounter">0</span><span>+</span>

            <p></p>
            <p>{{ $t("home.Creative Teams") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheCounter",
  layout: "component",
  data() {
    return {
      projectCount: 0,
      globalCount: 0,
      awardsCount: 0,
      creativeCount: 0,
      inView: false,
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold:0.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.inView = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.$refs.counterSection);

    setInterval(() => {
      if (this.inView) {
        if (this.projectCount < 50) {
          this.projectCount++;
          this.$refs.projectCounter.innerText = this.projectCount;
        }
      }
    }, 100);
    setInterval(() => {
      if (this.inView) {
        if (this.globalCount < 12) {
          this.globalCount++;
          this.$refs.globalCounter.innerText = this.globalCount;
        }
      }
    }, 400);

    setInterval(() => {
      if (this.inView) {
        if (this.awardsCount < 6) {
          this.awardsCount++;
          this.$refs.awardsCounter.innerText = this.awardsCount;
        }
      }
    }, 900);

    setInterval(() => {
      if (this.inView) {
        if (this.creativeCount < 15) {
          this.creativeCount++;
          this.$refs.creativeCounter.innerText = this.creativeCount;
        }
      }
    }, 300);
  },
};
</script>

<style></style>
