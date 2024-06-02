import React, { PureComponent } from "react"
import { Outlet } from "react-router-dom"
import Menu from "./Menu"

export default class Songs extends PureComponent {
  render() {
    return (
      <div>
        <h2>Songs Page</h2>
        <h2>歌单</h2>
        <ul>
          <li>《晚安》</li>
          <li>《I lay my love on you》</li>
          <li>《My stupid heart》</li>
          <li>《失眠的夜》</li>
          <li>《有何不可》</li>
        </ul>
        <Menu />
        <Outlet />
      </div>
    )
  }
}
