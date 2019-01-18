import React from 'react'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'

class ExampleShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      example: {}
    }
  }

  async componentDidMount() {
    const response = await axios.get(`${apiUrl}/examples/${this.props.match.params.id}`)
    this.setState({ example: response.data.example })
  }

  render() {
    return (
      <div>
        <h1>Just One Example Below: </h1>
        {this.state.example.text}
      </div>
    )
  }
}

export default withRouter(ExampleShow)
