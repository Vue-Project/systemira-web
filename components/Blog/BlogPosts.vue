<template>
  <div class="common-section">
    <div class="container">
      <form class="blog-search" role="form">
        <div class="form-group">
          <input
            type="text"
            placeholder="Search"
            name="name"
            class="form-control"
          />
        </div>
        <ul class="search-resualts ">
          <li>UX Design</li>
          <li>UI Design</li>
          <li>Wireframe</li>
          <li>Prototyping</li>
          <li>Ios</li>
          <li>Android</li>
        </ul>
      </form>
      <div class="row">
        <div class=" col-lg-4 col-md-6" v-for="post in posts.slice(0, 9)" :key="post.id">
          <div class="post-item">
            <figure class="post-thumb m-0">
              <img :src="getImgUrl(post.image)" :alt="post.title" />
            </figure>
            <div class="post-desc">
              <NuxtLink to="/single"> Design</NuxtLink>

              <h4>{{ post.title }}</h4>
              <p>{{ post.content }}</p>
              <div class="post-time">
                <p>8 Min Read</p>
                <span class="divider-line"></span>

                <p>June 16, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
  layout:'cpmponent',
  data() {
    return {
      posts: [
        {
          id: 0,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 1,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 2,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 3,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 4,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 5,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 6,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 7,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 8,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 9,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 10,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 11,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 12,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 13,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 14,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 15,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 16,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 17,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 18,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 19,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 20,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 21,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 22,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 23,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 24,
          image: "posts/post-01.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 25,
          image: "posts/post-02.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
        {
          id: 26,
          image: "posts/post-03.png",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown took a galley",
        },
      ],
    };
  },
  methods: {
    getImgUrl: function (imagePath) {
      return require("@/assets/images/" + imagePath);
    },
  },
};
</script>

<style></style>
