<template>
    <h2 @click="start">任务队列</h2>
    <section>{{ str }}</section>
</template>
<script setup lang="ts">
import { ref } from "vue"
import lds from 'lindash'
const print = new lds.Print()

const str = ref("")
function start() {
    print.printChars({
        animte: true,
        second: 9, // 多少秒输出完整个句子
        text: "lindash is a powerful tool library designed to simplify common tasks in the development process. It provides a variety of practical functional modules to help developers improve work efficiency. lindash是一个功能强大的工具库，旨在简化开发过程中的常见任务。它提供了多种实用的功能模块，帮助开发者提高工作效率。",
        callback: (result: string) => {
            str.value += result
        }
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
            console.log(url)
            const resp = await fetchs(url)
            results[i] = resp
            request()
        }
        request()
        request()
        request()
    })
}

function fetchs(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url + "成功了")
        }, 1000)
    })
}

var urlarr = ["111111", '22222', '333333', '44', '55', '77']
concurRequest(urlarr, 2).then((res) => {
    console.log(res)
})
</script>