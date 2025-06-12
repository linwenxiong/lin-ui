<template>
  <section class="scroll_wrapper" :id="'iscroll'+ keys">
    <div id="scroller">
      <slot></slot>
    </div>
  </section>
</template>
<script setup lang="ts">
const emit = defineEmits(["onReady"]);
import { onMounted } from "vue"
const props = defineProps({
  isAutoInit: { // 是否初始化自动实例化
    type: Boolean,
    default: true
  },
  /**
   *  // probeType: 1‌：对性能没有影响。滚动事件只有在滚动条不繁忙时才会触发，类似于原生的滚动事件‌。
      // probeType: 2‌：在滚动条势能和反弹范围内，滚动事件会持续触发，类似于原生的滚动事件‌。
    ‌  // probeType: 3‌：像素级的触发滚动事件，这会对性能有较大影响，因为滚动事件会在每个requestAnimationFrame触发‌。
   */
  probeType: {
    type: Number || undefined,
    default: undefined
  },
  keys: {
    type: Number || undefined,
    default: undefined
  }
});
function initIscroll() {
  let iscrolls = null;
  if(props.keys !== undefined) {
    iscrolls = new window.IScroll(`#iscroll${props.keys}`, { keyBindings: true, probeType: props.probeType });
  } else {
    console.warn('iscroll组件缺少keys字段!');
  }
  emit('onReady', iscrolls);
  return iscrolls;
}

onMounted(()=>{
  props.isAutoInit && initIscroll();
})
</script>
<style scoped>
@import url(./lin-scroll.scss)
</style>
