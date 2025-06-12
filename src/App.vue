

<template>
  <lin-scroll :keys="2" @onReady="onReady" :probeType="2">
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
