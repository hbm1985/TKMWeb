import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { createChangeNameAction, createIncrementAgeAction } from "../../store/user"

class User extends PureComponent {

  changeName() {
    const { name, changeName } = this.props
    changeName(name + "~")
  }

  incrementAge() {
    const { incrementAge } = this.props
    incrementAge(1)
  }

  render() {
    const { name, age } = this.props
    return (
      <div>
        <h2>User</h2>
        <h2>姓名：{name}</h2>
        <h2>年龄：{age}</h2>
        <button onClick={() => this.changeName()}>修改姓名</button>
        <button onClick={() => this.incrementAge()}>修改年龄</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  age: state.user.age
})

const mapDispatchToProps = dispatch => ({
  changeName(name) {
    dispatch(createChangeNameAction(name))
  },
  incrementAge(number) {
    dispatch(createIncrementAgeAction(number))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)