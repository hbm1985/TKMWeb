import React, { PureComponent } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { createChangeBannersAction, createChangeRecommendsAction } from "../../store/actionCreators"

class Category extends PureComponent {

  fetchData() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const data = res.data.data
      const banners = data.banner.list
      const recommends = data.recommend.list

      const { changeBanners, changeRecommends } = this.props
      changeBanners(banners)
      changeRecommends(recommends)
    })
  }

  clearData() {
    const { changeBanners, changeRecommends } = this.props
    changeBanners([])
    changeRecommends([])
  }

  render() {
    return (
      <div>
        <h2>Category</h2>
        <button onClick={() => this.fetchData()}>获取数据</button>
        <button onClick={() => this.clearData()}>清除数据</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeBanners: (banners) => {
    dispatch(createChangeBannersAction(banners))
  },
  changeRecommends: (recommends) => {
    dispatch(createChangeRecommendsAction(recommends))
  }
})

export default connect(null, mapDispatchToProps)(Category)
