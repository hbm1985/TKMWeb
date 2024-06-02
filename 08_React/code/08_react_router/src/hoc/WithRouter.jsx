import { useNavigate } from "react-router-dom"

export default function WithRouter(Component) {
  function NewComponent(props) {
    //  use hooks必须在函数组件内的顶层作用域调用
    const navigate = useNavigate()
    const router = { navigate }
    return <Component {...props} router={router} />
  }

  return NewComponent
}