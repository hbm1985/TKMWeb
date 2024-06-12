import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import "normalize.css"
import "@css/index.less"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
)
