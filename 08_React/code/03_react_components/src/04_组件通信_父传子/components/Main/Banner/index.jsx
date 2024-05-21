import React, { Component } from "react"

export default class Banner extends Component {

  //  如果重写了组件的构造器，一定要传入props，并需要super关键字调用父类构造器
  //  这样做的目的：props不丢失，父组件可以正常向子组件传递数据
  // constructor(props) {
  //   super(props)
  //   console.log("Banner constructor:", props)
  // }

  render() {
    const { banners } = this.props

    return (
      <div>
        <h2>Banner</h2>
        <ol>
          {
            banners.map(banner => {
              return <li key={banner.id}>{banner.name}</li>
            })
          }
        </ol>
      </div>
    )
  }
}
