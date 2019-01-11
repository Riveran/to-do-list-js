import React, { Component } from 'react'

export default class ItemsList extends Component {
  render () {
    const body = this.props.toDoList.map(todos => (
      <li key={todos.id} onClick={() => this.props.removeTodo(todos.id)}>
        <p>{todos.text}</p>
      </li>
    ))
    return <ul>{body}</ul>
  }
}
