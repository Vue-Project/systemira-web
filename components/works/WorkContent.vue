<template>
  <section class="common-section">
    <div class="page-works">
      <div class="container">
        <div class="row">
          <div class="col-md-6" v-for="work in works" :key="work.id">
            <div class="work-item js-tilt">
              <a :href="work.link" target="_blank">
                <figure class="work-thumb">
                  <img :src="getImgUrl(work.image)" :alt="work.alt" />
                </figure>

                <h5>{{ work.title }}</h5>
              </a>
              <p>{{ work.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorksContent",
  layout: "component",

  data() {
    return {
      works: [
        {
          id: 0,
          image: "works/work-01.jpg",
          title: this.$root.$t("works.Delta"),
          desc: this.$root.$t("works.Delta Desc"),
          alt: this.$root.$t("works.Delta"),
          link: "https://www.behance.net/gallery/167153403/Delta-Capital-App",
        },
        {
          id: 1,
          image: "works/work-02.jpg",
          title: this.$root.$t("works.Bringero APP"),
          desc: this.$root.$t("works.Bringero APP Desc"),
          alt: this.$root.$t("works.Bringero APP"),
          link: "https://www.behance.net/gallery/165793159/Bringero-App",
        },
        {
          id: 2,
          image: "works/work-03.jpg",
          title: this.$root.$t("works.Clincova APP"),
          desc: this.$root.$t("works.Clincova APP Desc"),
          alt: this.$root.$t("works.Clincova APP"),
          link: "https://www.behance.net/gallery/166891893/Clinicova-App",
        },
        {
          id: 3,
          image: "works/work-06.jpg",
          title: this.$root.$t("works.Alheba Website APP"),
          desc: this.$root.$t("works.Alheba Website APP Desc"),
          alt: this.$root.$t("works.Alheba Website APP"),
          link: "https://alhebafruits.com/ ",
        },
        {
          id: 4,
          image: "works/work-11.jpg",
          title: this.$root.$t("works.Bringero Brand"),
          desc: this.$root.$t("works.Bringero Brand Desc"),
          alt: this.$root.$t("works.Bringero Brand"),
          link: "https://www.behance.net/gallery/165021183/Bringero-Brand-Design  ",
        },
        {
          id: 5,
          image: "works/work-12.jpg",
          title: this.$root.$t("works.Clincova Brand"),
          desc: this.$root.$t("works.Clincova Brand Desc"),
          alt: this.$root.$t("works.Clincova Brand"),
          link: "https://www.behance.net/gallery/165957393/Clinicova-Bran",
        },
        {
          id: 6,
          image: "works/work-07.jpg",
          title: this.$root.$t("works.Sync Smarty Website"),
          desc: this.$root.$t("works.Sync Smarty Website Desc"),
          alt: this.$root.$t("works.Sync Smarty Website"),
          link: "https://www.behance.net/gallery/165264177/Syncsmarty",
        },
        {
          id: 7,
          image: "works/work-13.jpg",
          title: this.$root.$t("works.Aqarify"),
          desc: this.$root.$t("works.Aqarify Desc"),
          alt: this.$root.$t("works.Aqarify"),
          link:"https://www.behance.net/gallery/167452227/Aqarify-Brand"        },
      
        {
          id: 8,
          image: "works/work-04.jpg",
          title: this.$root.$t("works.Furnty Website"),
          desc: this.$root.$t("works.Furnty Website Desc"),
          alt: this.$root.$t("works.Furnty Website"),
          link: "https://www.behance.net/gallery/166408757/Furnity-Brand",
        },
        {
          id: 9,
          image: "works/work-10.jpg",
          title: this.$root.$t("works.Diet time"),
          desc: this.$root.$t("works.Diet time Desc"),
          alt: this.$root.$t("works.Diet time"),
          link: "# ",
        },
       
        {
          id: 10,
          image: "works/work-08.jpg",
          title: this.$root.$t("works.Petrotam Website"),
          desc: this.$root.$t("works.Petrotam Website Desc"),
          alt: this.$root.$t("works.Petrotam Website"),
          link: "https://petrotam.com/",
        },
        {
          id: 11,
          image: "works/work-05.jpg",
          title: this.$root.$t("works.Fodo Website"),
          desc: this.$root.$t("works.Fodo Website Desc"),
          alt: this.$root.$t("works.Fodo Website"),
          link: "https://fodo-egy.com/",
        },
        // {
        //   id: 12,
        //   image: "works/work-09.jpg",
        //   title: this.$root.$t("works.Denta scan"),
        //   desc: this.$root.$t("works.Denta scan Desc"),
        //   alt: this.$root.$t("works.Denta scan"),
        //   link: "https://dentascan.net/",
        // },
       
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
