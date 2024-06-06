import { useEffect, useState } from "react"

function useScrollPosition() {

  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {

    const onScroll = () => {
      console.log(window.scrollX, window.scrollY)
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onscroll)
    }
  }, [])

  return [scrollX, scrollY]
}

export default useScrollPosition