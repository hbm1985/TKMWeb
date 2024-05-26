import React, { PureComponent } from "react"
import { createPortal } from "react-dom"

export default class Modal extends PureComponent {
  render() {
    return (
      <div>
        {
          createPortal(this.props.children, document.getElementById("modal"))
        }
      </div>
    )
  }
}
