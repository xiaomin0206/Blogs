---
title: 变量和遍历
date: 2020-02-21
type: 3
blog: true
excerpt: 原型，作为前端开发者，或多或少都有听说。你可能一直想了解它，但是由于各种原因还没有了解，现在就跟随我来一起探索它吧。本文将由浅入深，一点一点揭开 JavaScript 原型的神秘面纱。（需要了解基本的 JavaScript 对象知识）
tags:
    - JavaScript
---
##hls
```
<template>
  <li v-for="(item,index) in selectValue" :key="index">
    <p>{{labelList[index]}}</p>
    <video
      :id="'my_video'+index"
      :ref="'video'+index"
      class="video video-js vjs-default-skin vjs-big-play-centered"
      preload="auto"
      muted
      autoplay="autoplay"
    ></video>
  </li>
</template>
<script>
export default {
	data(){
		return{
			hls: null,
			selectValue:[]
		}
	},
  mounted() {
    this.playVideo(this.src, this.index);
    this.init();
  },
  beforeDestroy() {
    this.videoPause();
  },
  methods: {
	  videoPause() {
	    if (this.hls) {
	      this.hls.destroy();
	      this.hls = null;
	    }
	  },
  videoFun() {
    this.labelList = []
    this.selectValue.forEach((item, index) => {
       this.playVideo(item.src, index);
    });
  },
  playVideo(e, index) {
    //e为视频的m3u8 url
    this.$nextTick(() => {
      var myPlayer = document.getElementById("my_video" + index);
      // this.$refs.video
      if (Hls.isSupported()) {
        this.hls = new Hls();
        this.hls.loadSource(this.videoUrl + e);
        this.hls.attachMedia(myPlayer);
        this.hls.on(Hls.Events.MANIFEST_PARSED, function (res) {
          myPlayer.play();
        });
        this.hls.on(Hls.Events.ERROR, (event, data) => {
          // console.log("加载失败");
        });
      } else if (myPlayer.canPlayType("application/vnd.apple.mpegurl")) {
        //支持苹果原生应用
        myPlayer.src = this.videoUrl + e;
        myPlayer.addEventListener("loadedmetadata", function () {
          myPlayer.play();
        });
      }
    });
  },
  }
};
</script>
<style lang="css">
</style>
```