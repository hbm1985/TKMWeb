import styled from "styled-components"

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

export const AppWrapper = styled.div`
  .section {
    border: 1px solid red;
    color: orange;

    .title {
      font-size: 30px;
      color: blue;
    }

    .content {
      font-size: 20px;
      color: cyan;
    }

    &:hover {
      background-color: chocolate;
    }
  }

  .footer {
    margin-top: 20px;
    border: 1px solid orange;
    color: red;
  }
`