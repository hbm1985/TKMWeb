import styled from "styled-components"
//  引入外部变量
import {
  primaryColor,
  smallSize,
  largeSize,
  middleSize,
  secondaryColor
} from "./style/variables"

//  ES6标签模板字符串
//  1.模板字符串的基本使用
// const name = "Bread"
// const age = 24
// const str = `My name is ${name}, age is ${age}`

//  2.标签模板字符串的使用
// function foo(...args) {
//   console.log("foo:", args)
// }

// const name = "Bread"
// const age = 24
// foo`My name is ${name}, age is ${age}`

//  1.基本使用
export const AppWrapper = styled.div`
  background-color: skyblue;
`

//  2.子元素单独抽取为样式组件
//  3.样式组件可以接收外部传递的props
//  4.通过attrs给标签模板字符串中提供默认的属性
//  5.从一个单独的文件中引入变量
export const SectionWrawpper = styled.div.attrs((props) => ({
  defaultColor: props.color || "blue",
  paddingLeft: props.paddingLeft || 20
}))`
  border: 1px solid red;
  color: orange;
  background-color: slateblue;

  .title {
    padding-left: ${props => props.paddingLeft}px;
    font-size: ${props => props.fontSize}px;
    font-style: ${props => props.fontStyle};
    color: ${props => props.defaultColor}
  }

  .content {
    font-size: ${largeSize};
    color: ${primaryColor};
  }

  &:hover {
    background-color: chocolate;
    
    .title {
      color: ${primaryColor};
    }

    .content {
      color: ${secondaryColor};
    }
  }
`

export const FooterWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid orange;
  color: red;
  font-size: ${smallSize};
  background-color: cadetblue;

  &:hover {
    color: ${secondaryColor};
    font-size: ${middleSize};
    background-color: ${primaryColor};
  }
`