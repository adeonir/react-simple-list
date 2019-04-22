import React, { Component } from 'react'
import { render } from 'react-dom'

import './style.sass'

class App extends Component {
  state = {
    name: 'Adeonir',
  }

  render() {
    return <h1>Hello, {this.state.name}</h1>
  }
}

render(<App />, document.getElementById('app'))
