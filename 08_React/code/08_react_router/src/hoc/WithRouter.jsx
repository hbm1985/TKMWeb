import { useNavigate } from "react-router-dom"

export default function WithRouter(Component) {
  function NewComponent(props) {
    //  use hooks必须在函数组件内的顶层作用域调用
    const navigate = useNavigate()
    return <Component {...props} navigate={navigate} />
  }

  return NewComponent
}