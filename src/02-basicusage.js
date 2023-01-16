import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

// 使用h函数创建一个div，去设置div中的子元素 

const patch = init([])

let vnode = h('div#container', [
  h('h1', 'hello 111'),
  h('p', '啦啦啦')
])

const app = document.querySelector('#app')
const oldVnode = patch(app, vnode)

setTimeout(() => {
  // vnode = h('div#container', [
  //   h('h1', 'hello 222'),
  //   h('p', '😁')
  // ])
  // patch(oldVnode, vnode)

  // 清除div中的内容
  // h('!') 表示：一个空的注释节点
  patch(oldVnode, h('!'))
}, 2000)