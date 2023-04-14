<template>
  <div class="page-test">
    <nav
      class="navbar-fixed-top your-header-class"
      :class="{ 'top-nav-collapse': isSticky }"
      style=""
    ></nav>
    <h1 id="title">test</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    isSticky: false,
  }),
  created() {},
  mounted() {

    jQuery(document).ready(function ($) {
      // all custom jQuery will go here
      // alert("sdsdsd");--
			$("#title").html('A7med')
      $(".your-header-class").jPinning();


    	});

    
    this.scroll_event_handler = () => {
      this.isSticky = window.scrollY > 50;
			
    };
    window.addEventListener("scroll", this.scroll_event_handler);
		
  },
  unmounted() {
     window.removeEventListener("scroll", this.scroll_event_handler);
   },
};
</script>

<style>
.page-test {
  height: 2000px;
}

.navbar-fixed-top {
  position: fixed;
  top: 0;
  background: red;
  height: 50px;
  width: 100%;
  transition: all 250ms ease-in-out;
}

/* .top-nav-collapse {
  top: -100px;
} */
</style>




