import React, { PureComponent } from "react"
import WithUserInfo from "./hoc/WithUser"

const Home = WithUserInfo(function (props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>姓名：{props.name}</h2>
      <h2>年龄：{props.age}</h2>
      <h2>等级：{props.level}</h2>
    </div>
  )
})

const Profile = WithUserInfo(function (props) {
  return (
    <div>
      <h1>Profile</h1>
      <h2>姓名：{props.name}</h2>
      <h2>年龄：{props.age}</h2>
      <h2>轮播图：{props.banners}</h2>
    </div>
  )
})

const HelloFriend = WithUserInfo(function (props) {
  return (
    <div>
      <h1>HelloFriend</h1>
      <h2>姓名：{props.name}</h2>
      <h2>年龄：{props.age}</h2>
    </div>
  )
})

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home level={114514} />
        <Profile banners={["a", "b", "c"]} />
        <HelloFriend />
      </div>
    )
  }
}
