import React, { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "@/router"
import AppHeader from "@components/app-header"
import AppFooter from "@components/app-footer"

const App = memo(() => {
  return (
    <div>
      <div className="app">
        <AppHeader />
        <div className="main">
          {useRoutes(routes)}
        </div>
        <AppFooter />
      </div>
    </div>
  )
})

export default App
