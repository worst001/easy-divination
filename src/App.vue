<template>
  <div id="app">
    <Detail msg="Welcome to Your Vue.js App" sixYao="000111"/>
    <!-- <transition name="fade"> -->
    <!--   <div v-if="show.home"> -->
    <!--     <Home msg="Welcome to Your Vue.js App"/> -->
    <!--   </div> -->
    <!-- </transition> -->
    <!-- <transition name="fade"> -->
    <!--   <div v-if="show.detail"> -->
    <!--     <Detail msg="Welcome to Your Vue.js App"/> -->
    <!--   </div> -->
    <!-- </transition> -->
  </div>
</template>

<script>
import Detail from './components/Detail.vue'
// import Home from './components/Home.vue'
// import CYao from './components/Yao.vue'
// import CDivination from './components/Divination.vue'

export default {
  name: 'App',
  components: {
    Detail
    // Home
    // CDivination
  },
  data: function() {
    return {
      show: {
        home: false,
        detail: false
      }
    }
  },

  created: function () {
    setTimeout(function() {
      this.handleShow('home', true)
    }.bind(this), 10);
  },

  methods: {
    /**
    * HandleShow
    * 操作-动态展示组件
    *
    * @param string  home  组件名
    * @param boolean flag  标志位
    *
    * @return null
    */
    handleShow: function(comp = 'home', flag = true){
      switch (comp) {
        case 'home':
          this.show.home = flag
          break
        case 'detail':
          this.show.detail = flag
          break
        default:
      }
    },
  }
}
</script>

<style>
/* 主节点 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background:#11111c;
}

/* 主标签 */
html {
  background:#11111c;
}

/* 效果类 */

/* 渐入渐出 */
.fade-enter,.fade-leave-to{
    opacity: 0;
}
.fade-enter-to,.fade-leave{
    opacity: 1;
}
.fade-enter-active,.fade-leave-active{
    transition: all 3s;
}
</style>
