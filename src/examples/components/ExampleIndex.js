import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { examplesIndex } from '../api'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import '../Example.scss'

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
          <Link to={`/examples/${example.id}/show`}>{example.text}</Link>
        </div>
      )
    })
    return (
      <div>
        <h1>Examples</h1>
        {examples}
        <Link className='create-link' to='/examples-create'>Create New Example</Link>
      </div>
    )
  }
}

export default withRouter(ExampleIndex)
