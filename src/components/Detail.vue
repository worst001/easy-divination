<template>
  <!-- 详情 -->
  <div id="detail" class="">
    <div id="divination" class="">
      <!-- 卦象图 用konva勾画 -->
      <div id="divination-canvas" class="">
        <div id="divination-konva">
          <CDivination ref="cDivination"/>
        </div>
      </div>
      <!-- 卦的汉字 -->
      <div id="divination-word" class="vertical-center">
        <span>{{ name }}</span>
        <!-- <img :src="word" alt=""/> -->
      </div>
    </div>
    <div id="description" class="">
      <!-- 寓意 -->
      <div id="description-meaning" class="container">
        <span><font class="desc-title">寓 意</font></span>
        <span class="desc-para">{{ yuyi }}</span>
      </div>
      <!-- 卦辞 -->
      <div id="description-main" class="container">
        <span><font class="desc-title">卦 辞</font></span>
        <span class="desc-para">{{ guaci }}</span>
      </div>
      <!-- 爻辞 -->
      <div id="description-sub" class="container">
        <span><font class="desc-title">乂 辞</font></span>
        <div v-for="( item, key ) in yaoci" :key="key">
          <span class="desc-para"><font class="span-head">{{key}}</font> {{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CDivination from './Divination.vue'
export default {
  name: 'Detail',
  props: {
    msg: String,
    // 六爻字符串
    sixYao: String
  },
  components: {
    CDivination
  },
  data: function() {
    return {
      // 六爻组成的卦对象
      divination: null,
      name: null,
      word: null,
      yuyi: null,
      guaci: null,
      yaoci: null,
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
    * @return null
    */
    init: function () {
      this.divination = this.$refs.cDivination.instance
      this.name = this.divination.getName()
      // this.word = this.divination.getWord()
      this.yuyi = this.divination.getDescription().yuyi
      this.guaci = this.divination.getDescription().guaci
      this.yaoci = this.divination.getDescription().yaoci
    },
  }
}
</script>

<style scoped media="screen" lang="less">
/* 节点属性 */
#detail {
  height:inherit;
  width: inherit;
}
#divination {
  height: 15rem;
  width: inherit;
}
#divination-canvas {
  height: 15rem;
  width: 50%;
  float: left;
  #divination-konva {
    text-align: center;
    top:50%;
    margin:3rem auto;
    padding-left:1rem;
    height: 9rem;
    width: 9rem;
  }
}
#divination-word {
  height: 15rem;
  width: 50%;
  float: left;
  span {
    font-size: 5rem;
    font-family: "楷体","楷体_GB2312";
    color: antiquewhite;
    padding-right:1rem;
  }
}
#description {
  height: 27rem;
  width: inherit;
  #description-meaning {
    height: 6rem;
    .desc-para {
      color: greenyellow;
    }
  }
  #description-main {
    height: 5rem;
    .desc-para {
      color: blueviolet;
    }
    padding: 0 2rem 0 2rem;
  }
  #description-sub {
    height: 16rem;
    margin-top: 1rem;
    padding: 0 2rem 0 2rem;
  }
}

/* 类属性 */
// 容器属性
.container {
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
}
.vertical-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
// 小标题
.desc-title {
  font-size:1.2rem;
  font-weight:500;
  font-style: italic;
}
// 正文
.desc-para {
  /* font-style: italic; */
  color: white;
  font-size:1.1rem;
}
// 爻辞小标题
.span-head {
  font-size:1.1rem;
  font-style: italic;
  color: darkgoldenrod;
  margin-right: 1rem;
}

/* 标签属性 */
span {
  /* 上下间隔 */
  margin: 0 0 0.4rem 0;
}
</style>
