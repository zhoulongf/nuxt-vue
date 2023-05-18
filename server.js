/*
 * @Author: zhoulf
 * @FilePath: /nuxt-vue/server.js
 * @Date: 2023-05-18 10:58:16
 * @LastEditors: zhoulf
 * @LastEditTime: 2023-05-18 15:06:05
 * @Description: 
 */
const { serve } = require('@vue/cli-service-global');
const Vue = require('vue');
const server = require('express')()

server.get('/', (req, res) => {
  // 创建vue实例
  const app = new Vue({
    template:`<div id="app">hello nuxt</div>`
  })
  // 创建render函数
  const renderer = require('vue-server-renderer').createRenderer()
  // 将vue实例渲染成html
  renderer.renderToString(app).then(html => {
    console.log(html)
    res.send(html)
  }).catch(err => {
    throw err
  })
})

server.listen(3120, () => {
  console.log('hello')
})