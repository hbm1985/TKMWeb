import React, { PureComponent } from "react"

export default class Home extends PureComponent {
  //  严格模式的开发模式中，为了检测某些函数是否有副作用，会调用两次
  //  比如：constructor、componentDidMount、render等
  constructor(props) {
    console.log("Home constructor")
    super(props)
  }

  UNSAFE_componentWillMount() {
    console.log("Home UNSAFE_componentWillMount")
  }

  componentDidMount() {
    console.log("Home componentDidMount")
  }

  render() {
    console.log("Home render")
    return (
      <div ref="container">Home</div>
    )
  }
}
