import React, { PureComponent } from "react"
import { Link, Outlet } from "react-router-dom"
import WithRouter from "../../hoc/WithRouter"

class Home extends PureComponent {

  navigateTo(path) {
    const { navigate } = this.props.router
    navigate(path)
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className="nav">
          <Link to="/home/recommend">推荐</Link>
          <Link to="/home/ranking">排行榜</Link>
          <button onClick={() => this.navigateTo("/home/songs")}>歌单</button>
        </div>
        {/* 占位组件，用于展示匹配到的子组件 */}
        <Outlet />
      </div>
    )
  }
}

export default WithRouter(Home)