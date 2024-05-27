/*
  组件化天下的CSS

  前面说过，整个前端已经是组件化的天下：
    而CSS的设计就不是为组件化而生的，所以目前在组件化的框架中都需要一种合适的CSS解决方案

  在组件化中选择合适的CSS解决方案应该符合以下条件：
    可以编写局部CSS：CSS具备自己的作用域，不会随意污染其它组件内的元素
    可以编写动态的CSS：可以获取当前组件的一些状态，根据状态的变化生成不同的CSS样式
    支持所有的CSS特性：伪类、动画、媒体查询等
    编写起来简介方便，最好符合一贯的CSS风格特点
    等等...
 */

/*
  React中的CSS

  事实上，CSS一直是React的痛点，也是被开发者吐槽、诟病的一个点

  在这一点上，Vue做的要好于React：
    Vue通过在.vue文件中编写<style></style>标签来编写自己的样式
    通过是否添加scoped属性来决定编写的样式是全局有效的还是局部有效的
    通过lang属性来设置喜欢的less、sass等预处理器
    通过内联样式风格的方式来根据最新状态设置和改变css
    等等...

  Vue在CSS上虽然不能称为完美，但是已经足够简洁、自然、方便了，至少统一的样式风格不会出现在多个开发人员，多个项目采用不一样的样式风格

  相比而言，React官方并没有给出React中统一的风格：
    由此，从普通的CSS，到CSS Modules，再到CSS in JS，有几十种不同的方案，上百个不同的库
    大家一致在寻找最好的或者说最适合自己的CSS方案，但是到目前为止也没有一个统一的方案
 */

import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./01_内联样式的CSS/App"
import App from "./02_普通的CSS写法/App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
