<template>
  <div>
    <NavLight />
    <ThePageHeader />
    <BlogPosts />
    <TheProjects />
    <TheFooter />
  </div>
</template>

<script>
import NavLight from "../components/NavlLIght.vue";
import BlogPosts from "../components/Blog/BlogPosts.vue";
import ThePageHeader from "../components/Blog/ThePageHeader.vue";
import TheProjects from "../components/TheProjects.vue";
export default {
  components: {
    BlogPosts,
    TheProjects,
    ThePageHeader,
    NavLight
  },

  name: "BlogPage",
  layout: "main",
};
</script>

<style></style>
