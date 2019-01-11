import React, { Component } from 'react'
import AddItem from './components/addItem'
import ItemsList from './components/itemsList'

const TODOLIST = [
  {
    id: 1123,
    text: 'Купить молока'
  },
  {
    id: 1623,
    text: 'Наломать дров'
  },
  {
    id: 1153,
    text: 'Проверить маршрут'
  }
]

export default class App extends Component {
  state = {
    items: TODOLIST,
    test: ''
  }

  removeTodo = itemId => {
    const item = this.state.items.find(({ id }) => id === itemId)
    const index = this.state.items.indexOf(item)
    const newItems = JSON.parse(JSON.stringify(this.state.items))
    newItems.splice(index, 1)
    this.setState({ items: newItems })
  }

  toggleClick = data => {
    const newItem = [data, ...this.state.items]
    this.setState({
      items: newItem
    })
  }
  render () {
    return (
      <div>
        <AddItem toggleClick={this.toggleClick} />
        <ItemsList toDoList={this.state.items} removeTodo={this.removeTodo} />
      </div>
    )
  }
}
