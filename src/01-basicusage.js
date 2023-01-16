import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

// init 的作用就是创建一个使用指定模块集的patch（补丁）函数。
const patch = init([])


// 第一个参数：标签+选择器
// 第二个参数：如果是字符串就是标签中的文本内容
let vnode = h('div#container.cls', 'hello')
let app = document.querySelector('#app')
// 第一个参数：旧的 VNode，可以是DOM元素
// 第二个参数：新的 VNode
// 返回新的VNode
let oldVnode = patch(app, vnode)

vnode = h('div#container.xxx', 'hi xxx')
patch(oldVnode, vnode)
// patch 的作用就是对比新旧两个vnode的差异，把新节点中变化的内容渲染到真实DOM，最后返回新节点作为下一次处理的旧节点。
// 它是整个snabbdom中的核心函数。

