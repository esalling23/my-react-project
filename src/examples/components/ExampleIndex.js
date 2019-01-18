import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { examplesIndex } from '../api'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class ExampleIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      examples: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/examples`)
    this.setState({ examples: response.data.examples })
  }

  render() {
    const examples = this.state.examples.map(example => {
      return (
        <div key={example.id}>
          {example.text}
        </div>
      )
    })
    return (
      <div>
        <h1>Examples</h1>
        {examples}
      </div>
    )
  }
}

export default withRouter(ExampleIndex)
