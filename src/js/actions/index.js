import { UPDATE_TOKEN } from './actionTypes'

export const getToken = () => {
  return dispatch => {
    const token = Math.floor(Math.random(10000000000) * 10000000000);
    dispatch(updateToken(token))
  }
}

export const updateToken = (token) => (
  { type : UPDATE_TOKEN, token }
)
