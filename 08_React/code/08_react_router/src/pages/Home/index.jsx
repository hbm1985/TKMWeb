import React, { PureComponent } from "react"
import { Link, Outlet } from "react-router-dom"

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className="nav">
          <Link to="/home/recommend">推荐</Link>
          <Link to="/home/ranking">排行榜</Link>
        </div>
        {/* 占位组件，用于展示匹配到的子组件 */}
        <Outlet />
      </div>
    )
  }
}
