<template>
  <div class="mycard">
    <!-- 自定义组件 mycard -->
      <div class="card bg-fff p-15 mt-15">
      <!-- heard -->
        <div class="card_heard f flex-dqy-c pb-10 mb-10">
            <i class="bjimg mr-5"></i>
            <h2 class="font-s14 color-666 fd1">{{title}}</h2>
            <span class="more bjimg"></span>
        </div>
        <!-- cardnav-->
        <div class="card_nav">
            <div class="card_body">
              <!-- 相当于作用域插槽 放返回的内容 -->
              <slot></slot>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycard',
  // 接收父组件传过来的值  记住别定义错位置 不在data中
  props:{
  // 定义了一个title属性 类型为string 必填
    title: { type: String, required: true },
  },
  data() {  
    return {

    }
  }
 }
</script>
