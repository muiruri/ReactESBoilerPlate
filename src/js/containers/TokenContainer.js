import React, { Component } from 'react'
import { connect } from 'react-redux'

import TokenComponent from '../components/TokenComponent'
import { getToken } from '../actions/'

class TokenContainer extends Component {

  render() {
    return <TokenComponent {...this.props}/>
  }
}

const mapStateToProps = state => {
  return {
    token : state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateToken: () => {
      dispatch(getToken())
    },
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenContainer)
