//  参数一：mapStateToProps函数
import { PureComponent } from "react"
//  现阶段，这个store是直接引入的，与connect函数耦合了
// import store from "../store"

import { StoreContext } from "./storeContext"

//  参数二：mapDispatchToProps函数
export function connect(mapStateToProps, mapDispatchToProps) {

  //  返回一个函数（高阶组件）
  //  这个函数需要接收UI组件作为参数
  return function (WrapperComponent) {

    //  当store中的数据发生变化，需要重新执行自身的render函数，从而触发UI组件的重新渲染
    class NewComponent extends PureComponent {

      static contextType = StoreContext

      constructor(props, context) {
        super(props)

        //  外部传入的context，可以当做store来用
        // console.log("NewComponent constructor:", context)
        
        //  将store中的state保存至自身的state
        //  这样做的目的：store的数据发生变化，可以判断是否真的需要刷新数据
        this.state = mapStateToProps(context.getState())
      }

      //  这个组件需要自己实现store的state发生变化之后的UI刷新
      componentDidMount() {
        this.subscribe = this.context.subscribe(() => {
          //  强制刷新
          // this.forceUpdate()

          //  因为当前组件为PureComponent，所以这样可以决定是否真的需要刷新组件
          this.setState(mapStateToProps(this.context.getState()))
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
        const stateObj = mapStateToProps(this.context.getState())

        //  mapDispatchToProps的参数：dispatch
        //  返回值：对象，作为props传递给WrapperComponent
        const dispatchObj = mapDispatchToProps(this.context.dispatch)

        return <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
      }
    }

    return NewComponent
  }
}