<template>
  <section class="common-section bg-gray">
    <div class="container">
      <vueper-slides
        class="no-shadow"
        :visible-slides="6"
        slide-multiple
        :gap="3"
        :dragging-distance="3"
        :bullets="false"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide
          v-for="(slide, key) in slides"
          :key="slide.id"
          :image="hovered === key ? slide.img.hover : slide.img.image"
          @mouse-enter="hovered = key"
          @mouse-leave="hovered = false"
      
        />
      </vueper-slides>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "TheProjects",
  layout: "component",
  components: { VueperSlides, VueperSlide },

  data() {
    return {
      hovered: false,

      slides: {
        1: {
          img: {
            image: require("~/assets/images/projects/project-01.png"),
            hover: require("~/assets/images/projects/hover/project-01.png"),
          },
        },
        2: {
          img: {
            image: require("~/assets/images/projects/project-02.png"),
            hover: require("~/assets/images/projects/hover/project-02.png"),
          },
        },
        3: {
          img: {
            image: require("~/assets/images/projects/project-03.png"),
            hover: require("~/assets/images/projects/hover/project-03.png"),
          },
        },
        4: {
          img: {
            image: require("~/assets/images/projects/project-04.png"),
            hover: require("~/assets/images/projects/hover/project-04.png"),
          },
        },
        5: {
          img: {
            image: require("~/assets/images/projects/project-05.png"),
            hover: require("~/assets/images/projects/hover/project-05.png"),
          },
        },
        6: {
          img: {
            image: require("~/assets/images/projects/project-06.png"),
            hover: require("~/assets/images/projects/hover/project-06.png"),
          },
        },
        7: {
          img: {
            image: require("~/assets/images/projects/project-07.png"),
            hover: require("~/assets/images/projects/hover/project-07.png"),
          },
        },
        8: {
          img: {
            image: require("~/assets/images/projects/project-08.png"),
            hover: require("~/assets/images/projects/hover/project-08.png"),
          },
        },
        9: {
          img: {
            image: require("~/assets/images/projects/project-09.png"),
            hover: require("~/assets/images/projects/hover/project-09.png"),
          },
        },
        10: {
          img: {
            image: require("~/assets/images/projects/project-10.png"),
            hover: require("~/assets/images/projects/hover/project-10.png"),
          },
        },
        11: {
          img: {
            image: require("~/assets/images/projects/project-11.png"),
            hover: require("~/assets/images/projects/hover/project-11.png"),
          },
        },
        12: {
          img: {
            image: require("~/assets/images/projects/project-12.png"),
            hover: require("~/assets/images/projects/hover/project-12.png"),
          },
        },
        13: {
          img: {
            image: require("~/assets/images/projects/project-13.png"),
            hover: require("~/assets/images/projects/hover/project-13.png"),
          },
        },
        14: {
          img: {
            image: require("~/assets/images/projects/project-14.png"),
            hover: require("~/assets/images/projects/hover/project-14.png"),
          },
        },
        15: {
          img: {
            image: require("~/assets/images/projects/project-15.png"),
            hover: require("~/assets/images/projects/hover/project-15.png"),
          },
        },
        16: {
          img: {
            image: require("~/assets/images/projects/project-16.png"),
            hover: require("~/assets/images/projects/hover/project-16.png"),
          },
        },
        17: {
          img: {
            image: require("~/assets/images/projects/project-17.png"),
            hover: require("~/assets/images/projects/hover/project-17.png"),
          },
        },
        18: {
          img: {
            image: require("~/assets/images/projects/project-18.png"),
            hover: require("~/assets/images/projects/hover/project-18.png"),
          },
        },
      },
    };
  },
};
</script>
<style></style>
