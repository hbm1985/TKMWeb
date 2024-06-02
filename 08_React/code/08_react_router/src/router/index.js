import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("../pages/Home"))
const Recommend = React.lazy(() => import("../pages/Home/Recommend"))
const Ranking = React.lazy(() => import("../pages/Home/Ranking"))
const Songs = React.lazy(() => import("../pages/Home/Songs"))
const Detail = React.lazy(() => import("../pages/Home/Songs/Detail"))
const About = React.lazy(() => import("../pages/About"))
const Login = React.lazy(() => import("../pages/Login"))
const Category = React.lazy(() => import("../pages/Category"))
const Order = React.lazy(() => import("../pages/Order"))
const User = React.lazy(() => import("../pages/User"))
const NotFount = React.lazy(() => import("../pages/NotFound"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend" />
      },
      {
        path: "/home/recommend",
        element: <Recommend />
      },
      {
        path: "/home/ranking",
        element: <Ranking />
      },
      {
        path: "/home/songs",
        element: <Songs />,
        children: [
          {
            path: "/home/songs/detail/:id",
            element: <Detail />,
          }
        ]
      }
    ]
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/category",
    element: <Category />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "*",
    element: <NotFount />
  }
]

export default routes