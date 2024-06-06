import React, { memo } from "react"
import "./style.css"
import { useScrollPosition } from "./hooks"

const Home = memo(props => {

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
})

const About = memo(props => {

  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
})

const App = memo(() => {

  const [scrollX, scrollY] = useScrollPosition()

  return (
    <div className="app">
      <div className="scroll-position">x: {scrollX} y: {scrollY}</div>
      <h1>App</h1>
      <Home />
      <About />
    </div>
  )
})

export default App