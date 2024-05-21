import React, { Component } from "react"
import PropTypes from "prop-types"

class Banner extends Component {

  //  ES2022开始，静态属性可以放在类中
  static propTypes = {
    banners: PropTypes.array.isRequired,
    title: PropTypes.string
  }

  static defaultProps = {
    title: "默认标题"
  }

  //  如果重写了组件的构造器，一定要传入props，并需要super关键字调用父类构造器
  //  这样做的目的：props不丢失，父组件可以正常向子组件传递数据
  // constructor(props) {
  //   super(props)
  //   console.log("Banner constructor:", props)
  // }

  render() {
    const { title, banners } = this.props

    return (
      <div>
        <h2>Banner</h2>
        <h2>{title}</h2>
        <ul>
          {
            banners.map(banner => {
              return <li key={banner.acm}>
                <h3>{banner.title}</h3>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

//  类型限制
// Banner.propTypes = {
//   banners: PropTypes.array.isRequired,
//   title: PropTypes.string
// }

//  默认值
// Banner.defaultProps = {
//   title: "默认标题"
// }

export default Banner