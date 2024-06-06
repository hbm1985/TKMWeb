import { useEffect, useState } from "react";

function useLocalStorage(key) {
  //  data的初始值，从localStorage中取
  //  useState允许传入一个回调函数，这个回调函数的返回值作为state的初始值
  const [data, setData] = useState(() => {
    const localStorageData = window.localStorage.getItem(key)
    if (!localStorageData) {
      return ""
    }
    return JSON.parse(localStorageData)
  })

  //  data改变时的副作用
  //  在这个副作用里，将data存储到localStorage中
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  return [data, setData]
}

export default useLocalStorage