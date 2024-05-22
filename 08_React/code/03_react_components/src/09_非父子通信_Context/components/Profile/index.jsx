import React, { Component } from 'react'
import ThemeContext from '../../context/themeContext'

export default class Profile extends Component {

  static contextType = ThemeContext

  render() {
    const { color, fontSize } = this.context

    return (
      <div>
        <h2>Profile</h2>
        <div>color: {color}</div>
        <div>fontSize: {fontSize}</div>
      </div>
    )
  }
}
