<!-- 六爻组件 -->
<template>
  <div id="divination" class="">
    <div v-for="( item, index ) in instance.getSixInstances()" :key="index">
      <CYao :state="item.getInstance().getState()" />
    </div>
  </div>
</template>

<script>
import Divination from "../module/Divination.js"
import CYao from "../components/Yao.vue"

export default {
  name: 'Yao',
  props: {
    sixYao: String
  },
  components: {
    CYao
  },
  data: function() {
    return {
      instance: new Divination()
    }
  },
  created: function() {
    setTimeout(function() {
      this.init()
    }.bind(this), 10)
  },
  methods: {
    /**
    * Init
    * 初始化
    *
    * @return void
    */
    init: function () {
      this.items = this.instance.getSixInstances()
    },
  }
}
</script>

<style scoped media="screen" lang="less">
</style>

