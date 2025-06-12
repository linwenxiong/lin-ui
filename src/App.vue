

<template>
  <LinScroll :keys="2" @onReady="onReady" :probeType="2">
    <ul>
      <li @click="refresh">点我恢复</li>
      <li><LScroll><h1>2222222222222</h1></LScroll></li>
      <li><LLoading></LLoading></li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
      <li>122222</li>
    </ul>
  </LinScroll>
</template>
<script setup lang="ts">
import LinScroll from './components/lin-scroll/lin-scroll.vue'
import './components/lin-scroll/utils/iscroll-probe'
// let refresh
let _scroll: any = null
function onReady(scroll: any) {
  _scroll  = scroll
  scroll.on('scroll', function(){
    console.log(scroll.y) 
	})
}

function refresh() {
  _scroll.refresh()
}
</script>
<style scoped>
ul li {
  font-size: 38px;
}
</style>
