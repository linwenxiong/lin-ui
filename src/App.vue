

<template>
  <lin-scroll :keys="2" @onReady="onReady" :probeType="2" ref="_linScroll">
    <ul>
      <li @click="refresh">点我恢复</li>
      <li><h1>lin-scroll</h1></li>
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
  </lin-scroll>
</template>
<script setup lang="ts">
import { ref } from "vue"
// import { IScrollInstance } from "../packages/lib/LinScroll/src/index.ts"
import { IScrollInstance } from "../dist/types/index"
const _linScroll = ref<IScrollInstance | null>(null)
let _scroll: any = null
function onReady(scroll: any) {
  _scroll  = scroll
  scroll.on('scroll', function(){
    console.log(scroll.y) 
	})
}

function refresh() {
  _linScroll.value?.refresh()
  console.log("恢复了")
}
</script>
<style scoped>
ul li {
  font-size: 38px;
}
</style>
