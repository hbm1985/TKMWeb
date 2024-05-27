/*
  TransitionGroup

  当我们有一组动画时，需要将这些CSSTransition放入到一个TransitionGroup中来完成动画

  https://reactcommunity.org/react-transition-group/transition-group
 */

import React, { PureComponent } from "react"
import { nanoid } from "nanoid"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./style.css"

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      books: [
        { id: "001", name: "《你不知道的JS》", price: 99 },
        { id: "002", name: "《JS高级编程》", price: 89 },
        { id: "003", name: "《Vue高级编程》", price: 79 }
      ]
    }
  }

  addBook() {
    const books = [...this.state.books]
    books.push({
      id: nanoid(),
      name: "《React高级编程》",
      price: 69
    })
    this.setState({ books })
  }

  removeBook(index) {
    const books = [...this.state.books]
    books.splice(index, 1)
    this.setState({ books })
  }

  render() {
    const { books } = this.state
    return (
      <div>
        <h2>App</h2>
        <TransitionGroup component="ul">
          {
            books.map((book, index) => {
              return (
                <CSSTransition key={book.id} classNames="book" timeout={1000}>
                  <li>
                    <span>{book.name}-{book.price}</span>
                    <button onClick={() => this.removeBook(index)}>删除</button>
                  </li>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={() => this.addBook()}>添加书籍</button>
      </div>
    )
  }
}
