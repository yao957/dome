<template>
  <mycard :title="title">
    <div class="card_nav">
        <!-- 定义了一个数组 这个数组的结构是变量的 去后面绑定对应的数组结构 -->
        <div class="nav f flex-dqx-bt mb-10">
          <h3  @click="active =i"  v-for="(category,i) in categories" :key="i" ><router-link to=""  :class="{active: active === i}">{{category.name}}</router-link></h3>
        </div>

        <div class="card_body">
          <swiper>  
            <swiper-slide v-for="(category,i) in categories" :key="i">
              <!-- 使用作用域插槽 slot 给这个插槽起个名字 items -->
              <!-- category 绑定一个 -->
              <slot name="items" :category="category"> </slot>
            </swiper-slide>
        </swiper>
        </div>
    </div>
</mycard>
        
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() { 
    return {
      // 初始选择第一个
      active:2
    }
  },
  methods: {
 
  },
 }
</script>

<style lang="" scoped>

</style>