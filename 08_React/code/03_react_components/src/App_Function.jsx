/*
  函数组件

  函数组件时使用function来进行定义的函数，还是这个哈数会返回和类组件中render函数返回一样的内容

  函数组件有自己的特点（后续讲解hooks，就不一样了）
    没有生命周期，也会被更新并挂在，但是没有没有生命周期钩子
    this关键字不能只想组件实例（因为没有组件实例）
    没有内部状态（state）

  后续学习hooks时，会针对函数组件进行更多的学习
 */

import React from "react"

//  定义函数组件
export default function AppFunction() {
  //  函数组件中的this为undefined
  //  区别于类组件，函数组件中用不到this
  console.log("AppFunction:", this)

  //  函数组件中不存在state，因为每当函数执行时，state都会重置为初始化值
  //  hooks的useState可以解决此问题，后续再说
  // const state = { message: "AppFunction" }

  //  返回值：与类组件的render函数返回值是一样的
  return (
    <div>AppFunction</div>
  )
}
