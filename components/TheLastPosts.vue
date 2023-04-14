<template>
  <section class="common-section">
    <header class="section-header">
      <div class="container">
        <span>{{ $t("home.Our Blog") }}</span>
        <h2>{{ $t("home.Latest News") }}</h2>
      </div>
    </header>
    <div class="container">
      <div class="last-posts">
        <div class="row">
          <div class="col-md-4">
            <div class="post-item">
              <figure class="post-thumb">
                <img src="~/assets/images/posts/post-01.png" alt="post-1" />
              </figure>
              <div class="post-details">
                <h4>{{ $t("home.Latest Posts One") }}</h4>
                <div class="post-time">
                  <p>{{ $t("home.Design") }}</p>
                  <span class="divider-line"></span>

                  <p>{{ $t("home.Post One Time") }}</p>
                  <span class="divider-line"></span>

                  <p>{{ $t("home.Post One Date") }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-item">
              <figure class="post-thumb">
                <img src="~/assets/images/posts/post-02.png" alt="post-2" />
              </figure>
              <div class="post-details">
                <h4>{{ $t("home.Latest Posts Two") }}</h4>
                <div class="post-time">
                  <p>{{ $t("home.Design") }}</p>
                  <span class="divider-line"></span>

                  <p>{{ $t("home.Post Two Time") }}</p>
                  <span class="divider-line"></span>

                  <p>{{ $t("home.Post Two Date") }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="post-item">
              <figure class="post-thumb">
                <img src="~/assets/images/posts/post-03.png" alt="post-3" />
              </figure>
              <div class="post-details">
                <h4>{{ $t("home.Latest Posts There") }}</h4>
                <div class="post-time">
                  <p>{{ $t("home.Design") }}</p>
                  <span class="divider-line"></span>

                  <p>{{ $t("home.Post There Time") }}</p>
                  <span class="divider-line"></span>

                  <p>{{ $t("home.Post There Date") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "TheLastPosts", layout: "component" };
</script>

<style></style>
