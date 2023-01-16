// Snabbdom的核心：
// init()设置模块，创建patch()函数
// 使用h()函数创建JavaScript对象（Vnode）描述真实DOM
// patch()比较新旧两个Vnode
// 把变化的内容更新到真实DOM树

// Snabbdom源码：
// 源码地址
// https://github.com/snabbdom/snabbdom
// 当前版本：v2.1.0

// 克隆代码【指定版本：v2.1.0】
// git clone -b v2.1.0 --depth=1 git@github.com:snabbdom/snabbdom.git


// 重点关注示例的源码 【根目录下的examples、src文件夹】


// 目录结构：
// .vscode  开发工具的配置文件
// examples 官方提供的示例
// perf 性能测试
// src  源码
// src-->package：源码
// src-->test：单元测试


// 安装依赖：npm i
// 打包：npm run compile


// snabbdom中官方提供了6个模块：
// attributes
// props
// dataset
// class
// style
// eventlisteners

// 所有模块的定义：src-package-modules文件夹下，除上述6个模块，还有hero（演示的自定义模块）；modules（定义了模块中所有使用到的钩子函数）；h（用来创建vnode）; hooks（定义了vnode生命周期用到的所有钩子函数）；htmldomapi（对DOMAPI的包装，创建api、删除api等）；init(用来加载模块、加载api、并且返回一个patch函数)；is（辅助的模块，导出了两个函数，用来判断数组和原始值的判断）；jsx-global（jsx的类型声明文件）；jsx（处理jsx）；thunk(优化处理对复杂视图不可变质的优化)；tovnode（可以把dom转换成vnode）；vnode(定义vnode接口应该有哪些成员（ts）)



