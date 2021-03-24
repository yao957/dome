<template>
  <div class="Home">
    <!-- s of  swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in bannerData" :key="index">
        <img :src="item.image" :alt="item.title" width="100%"
      /></swiper-slide>
      <div
        class="swiper-pagination homepagination f flex-dqx-r"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of  swiper -->
    <!-- s of nav icons -->
    <div class="nav_icons pt-20 text-center mt-15">
      <div class="f flex-dqx-l flex-hh-t">
        <div class="nav_items mb-15" v-for="n in 10" :key="n">
          <span class="icons bjimg pb-5"></span>
          <span class="title">爆料站</span>
        </div>
      </div>
      <div class="nav_sq bg-f9f9f9 py-10 f flex-dqx-c flex-dqy-c">
        <i class="bjimg mr-5"></i>
        <span @click="off()">{{ mas }}</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <!-- s of card -->
    <Listcard title="新闻资讯" :categories='newsCats'>
      <!-- es6 的写法 关联组件中定义的名字为items 的具名插槽 -->
      <!-- 在父组件中拿到子组件的 category -->
      <!-- 父组件先把数据给子组件 子组件再把数据通过具名solt给父组件 父组件使用的就是在子组件循环后的每个category -->
      <!-- 父组件需要子组件的数据但是不要子组件的布局的时候 -->
      <template #items="{category}">
          <p class="f flex-dqy-c" v-for="(items,i) in category.newsList" :key="i">
            <span>{{items.categoryName}}</span>
            <router-link to='#' class="fd1">{{items.title}}</router-link>
            <em>{{items.date}}</em>
          </p>
      </template>
      </Listcard>

    <!-- e of card -->
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
    <p>aa</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mas: "收起",
      bannerData: [
        {
          image: require("../assets/images/banner1.jpeg"),
          title: "王者荣耀banner图第一张",
        },
        {
          image: require("../assets/images/banner2.png"),
          title: "王者荣耀banner图第二张",
        },
        {
          image: require("../assets/images/banner3.jpeg"),
          title: "王者荣耀banner图第三张",
        },
        {
          image: require("../assets/images/banner4.jpeg"),
          title: "王者荣耀banner图第四张",
        },
      ],
      swiperOption: {
        speed: 300, // 滑动速度  运行的时间
        grabCursor: true, // 手型
        autoplay: {
          // 自动切换
          delay: 3000,
        },
        // 显示分页
        pagination: {
          el: ".homepagination",
        },
      },
      newsCats: [
        {
          name: "热门",
          newsList:new Array(5).fill({}).map(v =>({
            categoryName:'公告',
            title:'6月2日全服不停机维护',
            date:'06/01'
          }))
        },

        {
          name: "新闻",
          newsList:new Array(5).fill({}).map(v =>({
            categoryName:'新闻',
            title:'6月2日全服不停机维护',
            date:'06/01'
          }))
        },

        {
          name: "公告",
          newsList:new Array(5).fill({}).map(v =>({
            categoryName:'公告',
            title:'6月2日全服不停机维护',
            date:'06/01'
          }))
        },

        {
          name: "活动",
          newsList:new Array(5).fill({}).map(v =>({
            categoryName:'活动',
            title:'6月2日全服不停机维护',
            date:'06/01'
          }))
        },

        {
          name: "赛事",
          newsList:new Array(5).fill({}).map(v =>({
            categoryName:'赛事',
            title:'6月2日全服不停机维护',
            date:'06/01'
          }))
        },


      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.homepagination {
  .swiper-pagination-bullet {
    width: 0.714286rem;
    height: 0.714286rem;
    border-radius: 0.214286rem;
    background: #fff;
    opacity: 1;
    &.swiper-pagination-bullet-active {
      background: #4b67af !important;
    }
  }
}
.nav_icons {
  background: #fff;
  .nav_sq {
    i {
      width: 0.714286rem;
      height: 0.714286rem;
      background-position: 38.577% 52.076%;
    }
  }
  .nav_items {
    width: 25%;
    border-right: solid 1px #4b67af42;
    &:nth-child(4n) {
      border: none;
    }
    &:last-child {
      border: none;
    }
    .icons {
      margin: auto;
    }
    &:nth-child(1) {
      .icons {
        width: 1.642857rem;
        height: 1.428571rem;
        background-position: 63.546% 15.517%;
      }
    }
    &:nth-child(2) {
      .icons {
        width: 1.642857rem;
        height: 1.428571rem;
        background-position: 90.483% 15.614%;
      }
    }
    &:nth-child(3) {
      .icons {
        width: 1.357143rem;
        height: 1.571429rem;
        background-position: 36.746% 0.924%;
      }
    }

    &:nth-child(4) {
      .icons {
        width: 1.428571rem;
        height: 1.428571rem;
        background-position: 10.408% 15.517%;
      }
    }

    &:nth-child(5) {
      .icons {
        width: 1.428571rem;
        height: 1.5rem;
        background-position: 89.733% 1.266%;
      }
    }

    &:nth-child(6) {
      .icons {
        width: 1.714286rem;
        height: 1.428571rem;
        background-position: 36.467% 15.287%;
      }
    }

    &:nth-child(7) {
      .icons {
        width: 1.714286rem;
        height: 1.714286rem;
        background-position: 63.3% 0.927%;
      }
    }

    &:nth-child(8) {
      .icons {
        width: 1.714286rem;
        height: 1.428571rem;
        background-position: 0 96.207%;
      }
    }

    &:nth-child(9) {
      .icons {
        width: 1.428571rem;
        height: 1.5rem;
        background-position: 89.733% 1.266%;
      }
    }

    &:nth-child(10) {
      .icons {
        width: 1.714286rem;
        height: 1.428571rem;
        background-position: 36.467% 15.287%;
      }
    }
  }
}
.card {
  .card_heard {
    border-bottom: solid 1px #eee;
    h2 {
      font-weight: normal;
    }
    span {
      width: 1.285714rem;
      height: 0.214286rem;
      background-position: 47.619% 56.305%;
    }
    i {
      width: 0.928571rem;
      height: 0.928571rem;
      background-position: 0.138% 50.452%;
    }
  }
  .card_nav {
    h3 {
      font: 0.857143rem;
      font-weight: normal;
      a {
        padding-bottom: 0.214286rem;
        border-bottom: solid 2px transparent;
      }
      .active {
        color: #db9e3f;
        border-bottom: solid 2px #db9e3f;
      }
    }
  }
  .card_body {
    p {
      margin-top: 0.714286rem;
      span {
        border: solid 1px #f00;
        border-radius: 2px;
        font-size: 0.714286rem;
        padding: 0 0.142857rem;
        margin-right: 0.357143rem;
      }
      a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-basis: 14.285714rem;
      }
      em {
        font-weight: normal;
        color: #666;
      }
    }
  }
}
</style>