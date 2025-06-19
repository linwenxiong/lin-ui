<template>
    <h2 @click="start">任务队列</h2>
    <section>
        <div v-for="item, index in streamJson" :key="index + 'stream'">
            <h2>板书内容：</h2>
            <div style="color: aliceblue;">
                {{ item.板书 }}
            </div>
            <div v-for="gaoitem, inx in item.讲稿" :key="index + inx + 'jiangao'" style="background-color: aquamarine;">
                <h2 v-if="gaoitem">讲解:</h2>
                {{gaoitem}}
            </div>
            <div v-if="item.提问" style="background-color: bisque;">
                <h2>提问：</h2>
                {{ item.提问 }}
            </div>
        </div>
    </section>
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
    let cacheArr: string[] = []
    let banshuArr: string[] = []
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
        second: 50, // 多少秒输出完整个句子
        text: streamInfo,
        callback: (result: string) => {
            getLabelConent(result)
        }
    })

    async function printstring() {
        const fenduanStr = streamJson[bookIndex]
        const { 板书 } = fenduanStr
        // const res =  await printbanshu(板书)
        // str.value = res
        // index++
        // printstring()
    }
    setTimeout(()=>{
        printstring()
    }, 1000)
    
}

let findSwitch = false // 排查开关
let theLabel = '' // 当前的label
let bookConten = '' // 板书内容
let speakConten = '' // 讲稿内容
let _bookContens: string[] = [] // 板书内容
let _speakContens: string[] = [] // 讲稿内容

let bookIndex = 0 // 板书indx
let speakIndex = 0 // 讲稿indx

const streamJson = ref<any>([]) // 总数组

function getLabelConent(streamtext: string) { // 问题1：假设板书内容比较长，遇到下一个[才去push的话，就没有办法做到时效性的流式输出内容
    console.log("当前的内容:板书：", streamJson)

    if (streamtext === "[") { // 1 排查是否有括号
        if (bookConten) {
            bookIndex++
            speakIndex = 0
            _speakContens = []
        }
        if (speakConten) {
            speakIndex++
        }
        findSwitch = true
        theLabel = ''
        bookConten = ''
        speakConten = ''
    }
    if (theLabel.length === 4) {
        switch (theLabel) {
            case "[板书]":
                bookConten += streamtext
                streamJson.value[bookIndex] = {
                    "板书": bookConten,
                    "讲稿": [],
                    "提问": ''
                }
                break;
            case "[讲稿]":
                speakConten += streamtext
                _speakContens[speakIndex] = speakConten
                streamJson.value[bookIndex - 1]["讲稿"] = [
                    ..._speakContens
                ]
                break;
            case "[提问]":
                streamJson.value[bookIndex - 1]["提问"] += streamtext
                break;
        }
        return
    }
    if (findSwitch) {
        theLabel += streamtext
    }
}
function printbanshu(text) {
    let strings = ''
    return new Promise((resolve) => {
        resolve(text)
        // print2.printChars({
        //     animte: true,
        //     second: 0.5, // 多少秒输出完整个句子
        //     text: text,
        //     callback: (result: string) => {
        //         strings += result
        //         str.value += result
                
        //         if (strings.length === text.length) {
        //             resolve("==============" + text + '播放完了')
        //         }
        //     }
        // })
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