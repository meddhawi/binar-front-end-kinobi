import axios from 'axios'
import {
    LOGIN_FINISHED,
    LOGIN_REQUEST,
    LOGIN_FAILED,
    REGISTER_FINISHED,
    REGISTER_REQUEST,
    REGISTER_FAILED,
    UPDATE_FINISHED,
    UPDATE_REQUEST,
    UPDATE_FAILED,
    LOG_OUT,
  } from '../types'
const url = 'https://test-binar.herokuapp.com/'

const configJSON = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

const register = (dataUser) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST,
          })
        const { data } = await axios.post(`${apiURL}/register`, dataUser, configJSON)
        dispatch({
            type: REGISTER_FINISHED,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAILED,
            payload: error.response.data
          })
    }
}




export default {
    register
}