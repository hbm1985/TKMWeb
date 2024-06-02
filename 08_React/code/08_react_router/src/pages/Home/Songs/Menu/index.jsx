import React, { PureComponent } from "react"
import WithRouter from "../../../../hoc/WithRouter"

class Menu extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      menus: [
        { id: 111, name: "华语流行" },
        { id: 112, name: "古典音乐" },
        { id: 113, name: "民谣歌曲" }
      ]
    }
  }

  navigateToDetail(id) {
    const { navigate } = this.props.router
    navigate(`/home/songs/detail/${id}`)
  }

  render() {
    const { menus } = this.state
    return (
      <div>
        <h2>Menu Page</h2>
        <ul>
          {
            menus.map(menu => {
              return <li key={menu.id} onClick={() => this.navigateToDetail(menu.id)}>{menu.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default WithRouter(Menu)