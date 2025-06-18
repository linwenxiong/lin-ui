<template>
    <h2 @click="start">任务队列</h2>
    <section>{{ str }}</section>
</template>
<script setup lang="ts">
import { ref } from "vue"
import lds from 'lindash'
import { streamInfo } from "./streamInfo.ts"
const str = ref('')
const print = new lds.Print()
const print2 = new lds.Print()
function start() {
    let switchs = true
    let cacheArr = []
      

    let cache = {
        开场: '',
        板书: '',
        其他: '',
        讲稿: ''
    }
    let label = ''
    let tempstr = ''
    let index = 0
    let pchaloading = false

    let itemStr = ''

    print.printChars({
        animte: true,
        second: 9, // 多少秒输出完整个句子
        text: streamInfo,
        callback: (result: string) => {
            tempstr += result
            str.value = tempstr
            if (result === "[") { // 1 排查是否有括号
                label = ''
                pchaloading = true
            }
            if (pchaloading) {
                if (label.length === 4) {
                    if (label.includes("[开场]")) {
                        cache.开场 += result
                    } else if (label.includes("[板书]")) {
                        cache.板书 += result
                    } else if (label.includes("[讲稿]")) {
                        cache.讲稿 += result
                    } else {
                        cache.其他 += result
                    }
                }
                else {
                    label += result
                }
            } else {
                cache.其他 += result
            }
        }
    })

   
    async function printstring() {
        const fenduanStr = cache[index]
        await printbanshu(fenduanStr)
        index++
        printstring()
    }
}

function poxys() {

}


function printbanshu(text) {
    let strings = ''
    return new Promise((resolve) => {
        print2.printChars({
            animte: true,
            second: 0.5, // 多少秒输出完整个句子
            text: text,
            callback: (result: string) => {
                strings += result
                str.value += result
                if (strings.length === text.length) {
                    resolve("==============" + text + '播放完了')
                }
            }
        })
    })
}



function concurRequest(urls: Array<string>, maxNum) {
    return new Promise(resolve => {
        if (urls.length === 0) {
            resolve([])
            return
        }
        const results: any[] = []
        let index = 0
        async function request() {
            const i = index
            const url = urls[index]
            index++
            const resp = await fetchs(url)
            console.log(resp)
            results[i] = resp
            if (urls.length === index + 1) {
                resolve(results)
            } else {
                request()
            }
        }
        request()
        request()
        request()
    })
}

function fetchs(url) {
    return new Promise((resolve) => {
        const count = Math.floor(Math.random() * 3000)
        setTimeout(() => {
            resolve(url + "成功了")
        }, count)
    })
}
var urlarr = ["111111"]
for (var i = 0; i < 50; i++) {
    urlarr.push("www.bakdu.com/" + i)
}


// concurRequest(urlarr, 2).then((res) => {
//     console.log("结束啦：-==============",res)
// })
</script>
<style>
body {
    background-color: rgb(0, 117, 171);
}
</style>