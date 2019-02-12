import { UPDATE_TOKEN } from '../actions/actionTypes'

const token = (state = null, action) => {
  switch(action.type) {
    case UPDATE_TOKEN:
      if(action.token != null) {
        return action.token
      }
      return state
    default:
      return state
  }
}

export default token
