import { createContext } from "react"

//  创建一个Context
const ThemeContext = createContext({
  color: "light",
  fontSize: "16px"
})

export default ThemeContext