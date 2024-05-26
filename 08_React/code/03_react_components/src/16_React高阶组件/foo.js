//  普通函数
function foo() {
  console.log("foo")
}

//  高阶函数（入参为函数）
function foo2(fn) {
  setTimeout(() => {
    fn()
  }, 2000)
}

//  高阶函数（返回值为函数）
function foo3() {
  const fn = () => {
    console.log("fn")
  }
  return fn
}