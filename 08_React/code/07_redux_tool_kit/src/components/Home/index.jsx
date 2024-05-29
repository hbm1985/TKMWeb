import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { increment } from "../../store/features/counter"
import { getHomeData } from "../../store/features/home"

class Home extends PureComponent {

  increment(number) {
    const { increment } = this.props
    increment(number)
  }

  getHomeData() {
    const { getHomeData } = this.props
    getHomeData()
  }

  render() {
    const { count, banners, recommends } = this.props

    return (
      <div>
        <h2>Home counter: {count}</h2>
        <button onClick={() => this.increment(1)}>+1</button>
        <button onClick={() => this.increment(5)}>+5</button>
        <button onClick={() => this.increment(8)}>+8</button>
        <button onClick={() => this.getHomeData()}>获取数据</button>
        <h2>轮播图</h2>
        <ul>
          {
            banners.map(banner => {
              return <li key={banner.acm}>{banner.title}</li>
            })
          }
        </ul>
        <h2>推荐</h2>
        <ul>
          {
            recommends.map(recommend => {
              return <li key={recommend.acm}>{recommend.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  banners: state.home.banners,
  recommends: state.home.recommends
})

const mapDispatchToProps = dispatch => ({
  increment(number) {
    dispatch(increment(number))
  },
  getHomeData() {
    dispatch(getHomeData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)