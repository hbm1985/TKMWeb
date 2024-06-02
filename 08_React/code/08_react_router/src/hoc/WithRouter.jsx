import { useLocation, useNavigate, useParams, useRoutes, useSearchParams } from "react-router-dom"

export default function WithRouter(Component) {
  function NewComponent(props) {
    //  use hooks必须在函数组件内的顶层作用域调用
    //  1.导航
    const navigate = useNavigate()
    //  2.动态路由的参数：/detail/id
    const params = useParams()
    //  3.查询字符串的参数：/user?name=Bread&age=24
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)

    const router = { navigate, params, location, query }
    return <Component {...props} router={router} />
  }

  return NewComponent
}