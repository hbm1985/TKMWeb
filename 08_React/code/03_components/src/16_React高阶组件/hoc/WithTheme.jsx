import React from "react"
import ThemeContext from "../context/themeContext"

function WithThemes(OriginComponent) {
  return props => {
    return (
      <ThemeContext.Consumer>
        {
          value => {
            return <OriginComponent {...props} {...value} />
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default WithThemes