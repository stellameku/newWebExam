<template>

  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
    <div class="brand">
              <h1 style="color:white;">A bunch of photo I took</h1>
              
            </div></parallax>
    

      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto md-size-66 ">
          <md-card>
            <carousel
              :per-page="1"
              loop
              :speed="700"
              autoplay
              :autoplay-timeout="5000"
              :mouse-drag="false"
              navigationEnabled
              navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
              navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
            >
              <slide>
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Padar Island, Indonesia
                  </h4>
                </div>
                <img class="carousel-img" :src="carousel1" alt="carousel1" />
              </slide>
              <slide>
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Lembongan Island, Indonesia
                  </h4>
                </div>
                <img class="carousel-img" :src="carousel2" alt="carousel2" />
              </slide>
              <slide>
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Tegallalang Rice Terrace, Indonesia
                  </h4>
                </div>
                <img class="carousel-img" :src="carousel3" alt="carousel3" />
              </slide>
            </carousel>
          </md-card>
        </div>
       </div>
      </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
   
    carousel1: {
      type: String,
      default: require("@/assets/img/faces/crsl1.jpg")
    },
    carousel2: {
      type: String,
      default: require("@/assets/img/faces/crsl2.jpg")
    },
    carousel3 : {
      type: String,
      default: require("@/assets/img/faces/crsl3.jpg")
    }
  },
  
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
    
  }
}

.carousel-img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}





</style>
