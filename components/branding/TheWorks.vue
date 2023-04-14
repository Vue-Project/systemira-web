<template>
  <section class="common-section">
    <header class="section-header">
      <div class="container">
        <span>    {{ $t("home.Our Works") }}</span>
        <h2>    {{ $t("home.Popular Works") }}</h2>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="work in works" :key="work.id">
          <div class="work-item js-tilt">
            <a :href="work.link" target="_blank">

            <figure class="work-thumb">
              <img :src="getImgUrl(work.image)" :alt="work.alt" />
            </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "TheWorks",
  layout: "component",
  data() {
    return {
      works: [
       
        {
          id: 0,
          image: "works/work-11.jpg",
          alt: "Bringero",
          link:"https://www.behance.net/gallery/165021183/Bringero-Brand"
      
        },
        {
          id: 1,
          image: "works/work-12.jpg",
          alt: "Clincova",
          link:"https://www.behance.net/gallery/165957393/Clinicova-Brand"
       
        },
       
        {
          id: 2,
          image: "works/work-07.jpg",
          alt: "Sync Smarty Website",
          link:"https://www.behance.net/gallery/165264177/Syncsmarty"
        },
      
        {
          id: 3,
          image: "works/work-13.jpg",
          alt: "Aqarify",
          link:"https://www.behance.net/gallery/167452227/Aqarify-Brand"
          
        },
        {
          id: 4,
          image: "works/work-04.jpg",
          alt: "Furnty Website",
          link:"https://www.behance.net/gallery/166408757/Furnity-Brand"
        
        },
        {
          id: 5,
          image: "works/work-01.jpg",
          alt:"Delta",
          link:"https://www.behance.net/gallery/167153403/Delta-Capital-App"
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
