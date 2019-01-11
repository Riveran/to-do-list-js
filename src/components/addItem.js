import React, { Component } from 'react'

export default class AddItem extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
    const { text } = this.state
    this.props.toggleClick({
      id: +new Date(),
      text
    })
    this.state.text = ''
  }
  render () {
    const { text } = this.state
    return (
      <div>
        <input id='text' value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>add</button>
      </div>
    )
  }
}
