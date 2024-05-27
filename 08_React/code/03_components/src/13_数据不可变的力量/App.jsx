import React, { PureComponent } from "react"
import { nanoid } from "nanoid"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      books: [
        { id: "001", name: "《你不知道的JS》", price: 99, count: 1 },
        { id: "002", name: "《JS高级程序设计》", price: 88, count: 1 },
        { id: "003", name: "《React高级设计》", price: 78, count: 2 },
        { id: "004", name: "《Vue高级设计》", price: 95, count: 3 }
      ]
    }
  }

  test() {
    //  不做浅拷贝，直接传递引用
    const books = this.state.books
    books.push({
      id: nanoid(),
      name: "《Angular高级设计》",
      price: 80,
      count: 1
    })
    //  思考一个问题：PureComponent在shouldComponentUpdate中，做的是浅层比较
    //  如果新旧state的数据指向同一个引用，比较结果为true，就不会触发render了
    console.log(books === this.state.books)
    this.setState({ books })
  }

  addNewBook() {
    const book = {
      id: nanoid(),
      name: "《Angular高级设计》",
      price: 80,
      count: 1
    }
    //  将state中的数据浅拷贝一份
    const books = [...this.state.books, book]
    this.setState({ books })
  }

  increment(index) {
    //  修改的books为同一个book
    //  区别：直接赋值books，并不会重新触发render
    // const books = this.state.books
    // books[index].count++

    const books = [...this.state.books]
    books[index].count++
    this.setState({ books })
  }

  render() {
    const { books } = this.state
    return (
      <div>
        <h2>数据列表</h2>
        <button onClick={() => this.test()}>测试</button>
        <button onClick={() => this.addNewBook()}>添加新书籍</button>
        <ul>
          {
            books.map((book, index) => {
              return <li key={book.id}>
                <span>编号：{book.id}--</span>
                <span>书名：{book.name}--</span>
                <span>价格：￥{book.price}--</span>
                <span>数量：{book.count}--</span>
                <button onClick={() => this.increment(index)}>+1</button>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

