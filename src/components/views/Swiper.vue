<template>
  <swiper :breakpoints="swiperOptions.breakpoints" :modules="modules" :pagination="{ clickable: true, }" :space-between="25"
    @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide v-for="item in programItems" :key="item.id">
      <v-sheet class="p-4" height="150" rounded="lg">
        <v-card height="150" class="elevation-0">
          <v-card-text>
            <div class="d-flex justify-space-between">
              <div>
                <div>{{ item.category }}</div>
                <p class="text-h6 text--primary pt-1">{{ item.title }}</p>
              </div>
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="10"
                :model-value="value"
                color="#6772e6"
              >
                {{ value }}
              </v-progress-circular>
            </div>
            <div class="text--primary mt-2">{{ item.slogan }}</div>
          </v-card-text>
        </v-card>
      </v-sheet>
    </swiper-slide>
  </swiper>
</template>
<script>

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    programItems: [
      {
        title: 'HTML',
        category: '퍼블리싱',
        slogan: 'HTML을 이용한 하드코딩 및 부트스트랩 프레임워크 기반 코딩가능.',
      },
      {
        title: 'CSS', 
        category: '퍼블리싱', 
        slogan: 'CSS를 이용한 커스텀,애니메이션,포커싱,반응형 및 SCSS를 이용한 효율적인 유지보수 가능.',       
      },
      { 
        title: 'JQuery', 
        category: '퍼블리싱', 
        slogan: 'JQuery를 이용한 이벤트 구현 및 다양한 라이브러리 사용가능.' 
      },
      { 
        title: 'JAVA Script', 
        category: '퍼블리싱', 
        slogan: 'JAVA Script를 이용한 이벤트 구현 및 다양한 라이브러리 사용가능.' 
      },
      { 
        title: 'VUE.js', 
        category: '퍼블리싱', 
        slogan: 'VUE.js프레임워크를 사용한 퍼블리싱 가능 및 다양한 라이브러리 사용가능.' 
      },
      { 
        title: '어도비 포토샵', 
        category: '디자인', 
        slogan: '포토샵의 기본적인 툴 사용 및 편집디자인 가능.' 
      },
      { 
        title: '어도비 일러스트', 
        category: '디자인', 
        slogan: '일러스트의 기본적인 툴 사용 및 편집디자인 가능.' 
      },
      { 
        title: '어도비 XD', 
        category: '디자인', 
        slogan: 'XD의 기본적인 툴 사용 및 UI/UX디자인 가능.' 
      },
    ],
    APIData: [],
    interval: {},
    value: 0,
    swiperOptions: {
          breakpoints: {       
      700: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },          
     
      770: {       
         slidesPerView: 3,       
         spaceBetween: 25     
      }, 
      1080: {       
         slidesPerView: 4,       
         spaceBetween: 25     
      } 
   },
  }   
  }),
  beforeUnmount () {
      clearInterval(this.interval)
  },
  mounted () {
      this.interval = setInterval(() => {
        if (this.value === 80) {
          return (this.value = 80)
        }
        this.value += 10
      }, 100)
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>