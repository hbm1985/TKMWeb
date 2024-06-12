import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

import "normalize.css"
import "@css/index.less"
import App from "./App"
import store from "@store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<div>loading...</div>}>
          <App />
        </Suspense>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
