// Snabbdom中的两个核心函数：h函数、init函数

// h函数：
// --作用：创建Vnode对象
// --Vue中的h函数
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
// --h函数最早见于hypescript，使用JavaScript创建超文本


// 函数重载：（和参数有关、和返回值没关系）【因为h函数中用到了重载】
// 参数个数或参数类型不同的函数
// JavaScript中没有重载的概念（弱类型语言）
// TypeScript中有重载，不过重载的实现还是通过代码调整参数

// 函数重载-参数个数
// function add(a: number, b: number) {
//   console.log(a + b)
// }
// function add(a: number, b: number, c: number) {
//   console.log(a + b + c)
// }

// 函数重载-参数类型
// function add(a: number, b: number) {
//   console.log(a + b)
// }
// function add(a: number, b: string) {
//   console.log(a + b)
// }

// h函数源码：snabbdom源码：src-->package-->h.ts  【问题：h函数是怎么创建vnode的】
