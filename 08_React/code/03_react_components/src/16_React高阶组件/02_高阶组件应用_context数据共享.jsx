import React, { PureComponent } from "react"
import Product from "./components/Product"
import ThemeContext from "./context/themeContext"

export default class App extends PureComponent {
  render() {
    const theme = {
      color: "red",
      fontSize: "30px"
    }

    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <Product />
        </ThemeContext.Provider>
      </div>
    )
  }
}