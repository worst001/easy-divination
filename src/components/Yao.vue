<!-- 单乂组件 -->
<template>
  <div id="yao" class="">
    <!-- 画布设置 -->
    <v-stage :config="configKonva">
      <!-- 图层 -->
      <v-layer v-if="this.state == 1"><!-- 阳 -->
        <!-- 图形设置 -->
        <v-rect :config="configRect">
        </v-rect>
      </v-layer>
      <v-layer v-if="this.state == 0"><!-- 阴 -->
        <!-- 图形设置 -->
        <v-rect :config="configRectLeft"></v-rect>
        <v-rect :config="configRectRight"></v-rect>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import Yao from "../module/Yao.js"
export default {
  name: 'CYao',
  props:{
    state: String
  },
  data: function() {
    return {
      instance: new Yao(this.state),
      configKonva: {
        width: 130,
        height: 24
      },
      configRect: {
        width: 130,
        height: 18,
        fill: "darkred",
        stroke: "black",
        strokeWidth: 4
      },
      configRectLeft: {
        width: 60,
        height: 18,
        fill: "darkblue",
        stroke: "black",
        strokeWidth: 4
      },
      configRectRight: {
        x:70,
        width: 60,
        height: 18,
        fill: "darkblue",
        stroke: "black",
        strokeWidth: 4
      },
    }
  },
  created: function() {
  },
  methods: {
  }
}
</script>

<style scoped media="screen" lang="less">
</style>
