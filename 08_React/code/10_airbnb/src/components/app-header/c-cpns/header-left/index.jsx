import React, { memo } from "react"
import { LeftWrapper } from "./style"
import IconLogo from "@/assets/svg/icon_logo"

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      {/* svg的两种使用方式： */}
      {/* 1.做成图片。使用img元素引入 */}
      {/* 2.直接引入svg元素 */}
      {/* 使用img元素引入的缺点：无法动态修改某些属性，比如颜色 */}
      <h1 className="logo">
        <IconLogo />
      </h1>
    </LeftWrapper>
  )
})

export default HeaderLeft