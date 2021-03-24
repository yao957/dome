<template>
  <div class="Home">
    <swiper :options="swiperOption" v-loading="loading">  
      <swiper-slide v-for="(item,index) in bannerData" :key="index"><img :src="item.image" :alt="item.title"  width="100%" ></swiper-slide>
      <div class="swiper-pagination homepagination f flex-dqx-r" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() { 
    return {
        bannerData:[
          {image:require('../assets/images/banner1.jpeg'),title:'王者荣耀banner图第一张'},
          {image:require('../assets/images/banner2.png'),title:'王者荣耀banner图第二张'},
          {image:require('../assets/images/banner3.jpeg'),title:'王者荣耀banner图第三张'}
        ],
        paginationClickable :true,
         swiperOption: {
          speed:300,// 滑动速度  运行的时间
          grabCursor : true, // 手型
          autoplay: {  // 自动切换
            delay: 3000,
          },
          // 显示分页
          pagination: {
            el: ".homepagination",
          },
        },
    }
  }
 }
</script>

<style lang="scss">
.homepagination {
  .swiper-pagination-bullet{
    width: .714286rem;
    height:  .714286rem;
    border-radius: .214286rem;
    background: #fff;
    opacity: 1;
    &.swiper-pagination-bullet-active{
      background: #4b67af!important;
     }
  }
 
}


</style>