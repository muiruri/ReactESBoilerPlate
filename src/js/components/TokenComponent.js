import React, { Component } from 'react'

export default class TokenComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { token : props.token }
    this.updateToken = this.updateToken.bind(this)
  }

  updateToken() {
    this.props.updateToken()
  }

  static getDerivedStateFromProps(props, state) {
    return { token: props.token }
  }

  render() {
    return (
      <div className="loginview col-md-offset-4 col-md-4">
        Current Token {this.state.token}

        <button className="btn btn-sm btn-primary" onClick={ this.updateToken }>Update Token</button>
      </div>
    )
  }
}
