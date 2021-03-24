<template>
  <div class="Main">
    <!-- 主页面 -->
    <div class="topbar bg-000 py-10 pl-20  f flex-dqy-c ">
        <router-link  to="/" class="logo_img bjimg pr-10"></router-link>
        <div class="logo_title fd1">
            <h1 class="color-fff">王者荣耀</h1>
            <p class="color-666 font-s8">团队成就更多</p>
        </div>
        <div class="download pr-20">
            <router-link  to="/download" class="bjimg"></router-link>
        </div>
    </div>
    <div class="nav bg-home">
      <ul class="f flex-dqx-jg">
        <li><router-link to="/home"  class="active">首页</router-link></li>
        <li><router-link to="">攻略</router-link></li>
        <li><router-link to="">赛事中心</router-link></li>
        <li><router-link to="">IP新游</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="scss" scoped>
.topbar{
    .logo_img{
      width: 2.142857rem;
      height: 2.142857rem;
      background-position:0 -22.071429rem;
    }
    .download {
      a{
        width: 4.285714rem;
        height: 1.714286rem;
        background-position:-4.214286rem -22.071429rem;
      }
    }
  }
.nav{
  ul{
    height: 3rem;
    line-height: 3rem;
    li{
      // transparent 透明边框
      a{color: #fff; border-bottom: solid .214286rem transparent;padding-bottom: .214286rem;}
      .active{
      border-bottom: solid .214286rem #fff;
      }
    }
  }
}

</style>