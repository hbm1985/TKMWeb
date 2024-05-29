import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { decrement } from "../../store/features/counter"
import { changeBanners, changeRecommends, fetchHomeDataAction } from "../../store/features/home"

class Profile extends PureComponent {

  fetchHomeData() {
    const { fetchHomeData } = this.props
    fetchHomeData()
  }

  clearHomeData() {
    const { changeBanners, changeRecommends } = this.props
    changeBanners([])
    changeRecommends([])
  }

  decrement(number) {
    const { decrement } = this.props
    decrement(number)
  }

  render() {
    const { count, banners, recommends } = this.props

    return (
      <div>
        <h2>Profile counter: {count}</h2>
        <button onClick={() => this.decrement(1)}>-1</button>
        <button onClick={() => this.decrement(5)}>-5</button>
        <button onClick={() => this.decrement(8)}>-8</button>
        <button onClick={() => this.fetchHomeData()}>获取数据</button>
        <button onClick={() => this.clearHomeData()}>清空数据</button>
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
  decrement(number) {
    dispatch(decrement(number))
  },
  changeBanners(banners) {
    dispatch(changeBanners(banners))
  },
  changeRecommends(recommends) {
    dispatch(changeRecommends(recommends))
  },
  fetchHomeData() {
    dispatch(fetchHomeDataAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)