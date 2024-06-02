import React, { PureComponent } from "react"

export default class Ranking extends PureComponent {
  render() {
    return (
      <div>
        <h2>Ranking Page</h2>
        <h2>排行榜</h2>
        <ul>
          <li>飙升榜</li>
          <li>新歌榜</li>
          <li>原创榜</li>
          <li>热歌榜</li>
        </ul>
      </div>
    )
  }
}
