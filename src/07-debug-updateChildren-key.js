import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

// 首次渲染
let vnode = h('ul', [
  h('li', {key: 'a'}, '首页'),
  h('li', {key: 'b'}, '视频'),
  h('li', {key: 'c'},'微博'),
])

let app = document.querySelector('#app')
let oldVnode = patch(app, vnode)

// updateChildren的执行过程
vnode = h('ul', [
  h('li', {key: 'a'}, '首页'),
  h('li', {key: 'c'}, '微博'),
  h('li', {key: 'b'}, '视频'),
])

patch(oldVnode, vnode)

// 当设置节点key的时候，key属性相同，才可以重用dom元素。
// key不同的时候，会重新创建DOM元素

// key的意义：
// 在diff算法中比较vnode是否是相同节点
// 如果不设置key，会最大程度的重用DOM元素。但是有的时候会有问题。

