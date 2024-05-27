import React, { PureComponent } from "react"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      agree: false,
      hobbies: [
        { name: "sing", text: "唱", checked: false },
        { name: "dance", text: "跳", checked: false },
        { name: "rap", text: "rap", checked: false },
        { name: "basketball", text: "篮球", checked: false },
      ]
    }
  }

  handleSubmit(e) {
    //  阻止默认事件
    //  form的默认提交会刷新界面，因此通常都是我们自己提交数据
    e.preventDefault()
    //  获取数据
    const { username, password, agree, hobbies } = this.state
    //  模拟提交
    console.log("username:", username)
    console.log("password:", password)
    console.log("agree:", agree)
    console.log("hobbies:", hobbies.filter(hobby => hobby.checked).map(hobby => hobby.name))
  }

  handleValueChange(e) {
    //  根据e.target.name，确定哪个state发生变化
    const name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleAgreeChange(e) {
    this.setState({ agree: e.target.checked })
  }

  handleHobbiesChange(e, index) {
    const hobbies = [...this.state.hobbies]
    const hobby = hobbies[index]
    if (hobby) {
      hobby.checked = e.target.checked
      this.setState({ hobbies })
    }
  }

  render() {
    const { username, password, agree, hobbies } = this.state
    return (
      <div>
        <form action="/abc" onSubmit={e => this.handleSubmit(e)}>
          {/* 1.input文本 */}
          <div>
            <label htmlFor="username">
              用户名：
              <input
                id="username"
                type="text"
                name="username"
                autoComplete="off"
                value={username}
                onChange={e => this.handleValueChange(e)} />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              密码：
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={e => this.handleValueChange(e)} />
            </label>
          </div>

          {/* 2.checkbox单选 */}
          <div>
            <label htmlFor="agree">
              <input
                id="agree"
                type="checkbox"
                name="agree"
                checked={agree}
                onChange={e => this.handleAgreeChange(e)} />同意协议
            </label>
          </div>

          {/* 3.checkbox多选 */}
          <div>
            爱好：
            {
              hobbies.map((hobby, index) => {
                return (
                  <label htmlFor={hobby.name} key={hobby.name}>
                    <input
                      id={hobby.name}
                      type="checkbox"
                      name={hobby.name}
                      checked={hobby.checked}
                      onChange={e => this.handleHobbiesChange(e, index)} />{hobby.text}
                  </label>
                )
              })
            }
          </div>

          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}
