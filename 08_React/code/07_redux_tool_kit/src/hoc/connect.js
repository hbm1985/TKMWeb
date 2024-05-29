//  参数一：mapStateToProps函数

import { PureComponent } from "react";
import store from "../store"

//  参数二：mapDispatchToProps函数
export function connect(mapStateToProps, mapDispatchToProps) {

  //  返回一个函数（高阶组件）
  //  这个函数需要接收UI组件作为参数
  return function (WrapperComponent) {

    //  当store中的数据发生变化，需要重新执行自身的render函数，从而触发UI组件的重新渲染
    class NewComponent extends PureComponent {
      constructor(props) {
        super(props)

        //  将store中的state保存至自身的state
        //  这样做的目的：store的数据发生变化，可以判断是否真的需要刷新数据
        this.state = mapStateToProps(store.getState())
      }

      //  这个组件需要自己实现store的state发生变化之后的UI刷新
      componentDidMount() {
        this.subscribe = store.subscribe(() => {
          //  强制刷新
          // this.forceUpdate()

          //  因为当前组件为PureComponent，所以这样可以决定是否真的需要刷新组件
          this.setState(mapStateToProps(store.getState()))
        })
      }

      componentWillUnmount() {
        this.subscribe()
      }

      render() {

        //  store的两个属性对于这个组件很重要
        //  getState：获取store的state
        //  dispatch：获取dispatch，用于分发action
        // console.log("store:", store)

        //  mapStateToProps的参数：state
        //  返回值：对象，作为props传递给WrapperComponent
        // const stateObj = mapStateToProps(store.getState())

        //  mapDispatchToProps的参数：dispatch
        //  返回值：对象，作为props传递给WrapperComponent
        const dispatchObj = mapDispatchToProps(store.dispatch)

        return <WrapperComponent {...this.props} {...this.state} {...dispatchObj} />
      }
    }

    return NewComponent
  }
}