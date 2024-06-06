# 一、useEffect

+ 基本使用

  + 每次渲染完毕

+ 清除副作用：回调函数的返回值

  + 组件更新之前

  + 组件卸载之前

+ 多个Effect的使用

+ useEffect的依赖

# 二、useContext

# 三、useReducer

+ 并非Redux的替代品

+ 简化多个state操作

# 四、useCallback

+ 函数传递给子组件（避免子组件重新渲染）

+ 闭包陷阱、闭包知识的回顾

+ useRef进一步进行优化

# 五、useMemo

+ 返回值优化

+ 让计算操作不会多次执行（参考Vue中的计算属性）

+ 传给组组件是一个对象

# 六、useRef

+ 组件的整个生命周期中，总是返回同一个对象

+ 获取DOM/组件实例

+ 保存某一个值

# 七、useImperativeHandle

+ 传递子组件ref，子组件不直接绑ref，对ref进行处理，返回一个对象

# 八、useLayoutEffect

+ 组件渲染内容更新界面之前调用

+ 案例：修正数字

  + useEffect：有闪烁现象

  + useLayoutEffect：没有闪烁现象

+ 实际开发中，useEffect解决不了，再用useLayoutEffect

# 九、自定义Hook

+ 生命周期打印

+ Context共享

+ 监听窗口滚动

+ state与localStorage结合


