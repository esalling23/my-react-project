import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'

class ExampleCreate extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      example: {},
      user: props.user,
      created: false
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state.user)
    const response = await axios.post(`${apiUrl}/examples`,
      JSON.stringify({ example: this.state.example }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${this.state.user.token}`
        }
      })
    console.log(response)
    this.setState({
      example: response.data.example,
      created: true
    })
  }

  handleChange = (event) => {
    const createExample = {...this.state.example, [ event.target.name ]: event.target.value }
    this.setState({ example: createExample })
    console.log(this.state.example)
  }

  render() {

    if (this.state.created === true) {
      return <Redirect to={`/examples/${this.state.example.id}/show`} />
    }

    return (
      <div>
        <h1>Create Below: </h1>
        <form onSubmit={this.handleSubmit}>
          <input name="text" placeholder="text" type="text" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default withRouter(ExampleCreate)
