import React, { memo } from "react"
import { useLocalStorage } from "./hooks"

const App = memo(() => {

  const [token, setToken] = useLocalStorage("token")
  const [avatar, setAvatar] = useLocalStorage("avatar")

  return (
    <div>
      <h1>App</h1>
      <h2>Token: {token}</h2>
      <h2>Avatar: {avatar}</h2>
      <button onClick={() => setToken("114514")}>保存Token</button>
      <button onClick={() => setAvatar("https://www.bread.com/114514")}>保存Avatar</button>
      <button onClick={() => { setToken(""); setAvatar("") }}>清空数据</button>
    </div >
  )
})

export default App