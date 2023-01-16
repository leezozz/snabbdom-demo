// 模块的使用：
// Snabbdom的核心模块只能对vnode操作，Snabbdom的核心库并不能处理DOM元素的属性、样式、事件等，可以通过注册Snabbdom默认提供的模块来实现
// Snabbdom中的模块可以用来扩展Snabbdom的功能
// Snabbdom中的模块的实现是通过注册全局的钩子函数来实现的

// 官方提供的模块
// attributes
// props
// dataset
// class
// style
// eventlisteners

// 模块的使用步骤：
// 1. 导入需要的模块
import { init } from "snabbdom/build/package/init";
import { h } from "snabbdom/build/package/h";
import { styleModule } from "snabbdom/build/package/modules/style";
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";
// 2. init()中注册模块
const patch = init([
  styleModule,
  eventListenersModule
])
// 3. h()函数的第二个参数使用模块。传入模块中使用的数据（对象）
// const app = document.querySelector('#app')
// const vnode = h('div#container', [
//   h('h3', { style: { backgroundColor: "red" } }, '明天你好'),
//   h('p', { on: { click: clickEvent } }, 'hello everyone')
// ])
// patch(app, vnode)

// function clickEvent() {
//   console.log('点击了')
// }


// const patch = init([])
const app = document.querySelector('#app')
const vnode = h('div#box', [
  h('h3', { style: { backgroundColor: "blue" } }, '明天你好'),
  h('p', { on: { click: clickEvent } }, 'hello everyone')
])

function clickEvent() {
  console.log('点击了')
}

const newVnode = patch(app, vnode)