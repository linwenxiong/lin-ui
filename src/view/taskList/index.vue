<template>
    <h2 @click="start">任务队列</h2>
    <section>{{ str }}</section>
</template>
<script setup lang="ts">
import { ref } from "vue"
import lds from 'lindash'
const str = ref('')
const print = new lds.Print()
const print2 = new lds.Print()
function start() {
    let switchs = true
    let cache = {
        开场: '',
        讲稿: [],
        其他: []
    }
    let label = ''
    let tempstr = ''
    let index = 0
    print.printChars({
        animte: true,
        second: 9, // 多少秒输出完整个句子
        text: `[开场]lindash is a powerful tool library designed to simplify common tasks in the development process. It provides a 
        variety of practical functional modules to help developers 
        [板书]improve work efficiency. lindash是一个功能强大的工具库
        ，[讲稿]旨在简化开发过程中的常见任务。它提供了多种实用的功能模块，帮助开发者提高工作效率。`,
        callback: (result: string) => {
            tempstr += result
            if(result === "[") {
                label +=  result
                if(label.length === 4 && label.includes("[开场]")) {
                    cache.开场+= result
                }

            }
            console.log("缓存模板",cache)
            return
            if (tempstr.length > 5) {
                cache.其他.push(tempstr)
                tempstr = ''
                if(switchs) {
                    printstring()
                }
                switchs = false
                console.log("缓存模板",cache)
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
                if(strings.length === text.length) {
                    resolve("=============="+text+'播放完了')
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