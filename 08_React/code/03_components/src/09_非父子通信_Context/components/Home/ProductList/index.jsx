import React, { useContext } from "react"
import ThemeContext from "../../../context/themeContext"

//  在函数组件中获取Context的共享数据
function ProductList() {

  //  通过React hooks
  const context = useContext(ThemeContext)

  return (
    <div>
      <h2>ProductList</h2>
      <div>
        <div>color: {context.color}</div>
        <div>fontSize: {context.fontSize}</div>
      </div>
      {/* 通过Theme.Consumer获取数据 */}
      {/* 参考Flutter中的数据共享方案（Flutter的很多思想借鉴了React） */}
      <ThemeContext.Consumer>
        {
          value => {
            const { color, fontSize } = value
            return (
              <div>
                <div>color: {color}</div>
                <div>fontSize: {fontSize}</div>
              </div>
            )
          }
        }
      </ThemeContext.Consumer>
    </div>
  )
}

export default ProductList