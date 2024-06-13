import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import "normalize.css"
import "@css/index.less"
import App from "./App"
import store from "@store"
import theme from "@/assets/theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Suspense fallback={<div>loading...</div>}>
            <App />
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
