<template>
  <!-- 主页面 -->
  <div id="home" class="">
    <!-- 用户信息 -->
    <div id="userinfo" class="">
      <!-- TODO:  获取图片函数<04-11-20, hanwenhao> -->
      <!--  <img src="userinfo.geturl()" alt="" class="circle-border"/>  -->
      <img src="../assets/logo.png" alt="" class="circle-border"/>
    </div>
    <!-- 意愿框 -->
    <div id="willinput" class="">
      <h1 class="">请在心中默念占卜之事</h1>
      <p>（每天只能进行一次占卜）</p>
    </div>
    <!-- 开始按钮 -->
    <div id="start" class="">
      <button class="flash animated infinite" v-on:click="handleStart()"><font>开始占卜</font></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
    /**
    * HandleStart
    * 开始占卜
    * 调用父组件方法实现跳转
    *
    * @return <+Return+>
    */
    handleStart: function () {
      this.$parent.handleShow('home', false)
      setTimeout(function() {
        this.$parent.handleShow('detail', true)
      }.bind(this), 3000);
    },
  }
}
</script>

<style scoped media="screen" lang="less">
@import "../assets/button-animation.css";
/* 节点属性 */
#home {
  height:inherit;
  width: inherit;
}
#userinfo {
  height: 12rem;
  width: inherit;
  img {
    text-align: center;
    top:50%;
    margin:7rem 0 0 0;
    height: 5rem;
    width: 5rem;
  }
}
#willinput {
  height: 15rem;
  width: inherit;
  margin: 5rem 0 0 0;
}
#start {
  height: 12rem;
  width: inherit;
  button {
    margin:-15rem 0 0 0;
    height: 3rem;
    width: 15rem;
  }
  font {
    font-size: 2rem;
  }
}
/* 类属性 */
.circle-border {
  background: red;
  border:2px solid;
  border-radius:5rem;
}
</style>
