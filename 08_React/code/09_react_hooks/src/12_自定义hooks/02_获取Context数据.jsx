import React, { memo } from "react"
import { UserContext, TokenContext } from "./context"
import { useUserToken } from "./hooks"

const Home = memo(props => {

  const [user, token] = useUserToken()

  return (
    <div>
      <h1>Home Page</h1>
      <h2>姓名：{user.name}</h2>
      <h2>年龄：{user.age}</h2>
      <h2>Token：{token.token}</h2>
    </div>
  )
})

const About = memo(props => {

  const [user, token] = useUserToken()

  return (
    <div>
      <h1>About Page</h1>
      <h2>姓名：{user.name}</h2>
      <h2>年龄：{user.age}</h2>
      <h2>Token：{token.token}</h2>
    </div>
  )
})

const App = memo(() => {

  return (
    <UserContext.Provider value={{ name: "Bread", age: 24 }}>
      <TokenContext.Provider value={{ token: "114514" }}>
        <div>
          <h1>App</h1>
          <Home />
          <About />
        </div>
      </TokenContext.Provider>
    </UserContext.Provider>
  )
})

export default App