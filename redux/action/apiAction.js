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
    ALL_USER_FINISHED,
    ALL_USER_REQUEST,
    ALL_USER_FAILED
  } from '../types'
const apiURL = 'https://test-binar.herokuapp.com/'

const configJSON = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

const registerUser = (dataUser) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST,
          })
        const { data } = await axios.post(`${apiURL}/auth/signup`, dataUser, configJSON)
        console.log(data)
        dispatch({
            type: REGISTER_FINISHED,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}

const loginUser = (dataUser) => async(dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
          })
      
          const { data } = await axios.post(`${apiURL}/auth/login`, dataUser, configJSON)
          console.log(data)
          //set localStorage here
          localStorage.setItem('accessToken', data.result.access_token)
          console.log(data.result.access_token)
          console.log(localStorage.getItem('accessToken'))
          dispatch({
            type: LOGIN_FINISHED,
            payload: data,
          })
    } catch (error) {
        console.log(error)
    }
}

const logOut = () => async (dispatch) => {
    console.log('Logged OUT')
    localStorage.removeItem('accessToken')
    dispatch({
      type: LOG_OUT,
    })
}

const getAllItem = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: `${localStorage.getItem('accessToken')}`,
    },
  }
  try {
    dispatch({
      type: ALL_USER_REQUEST,
    })

    const { data } = await axios.get(`${apiURL}/v1/products`, config)
    dispatch({
      type: ALL_USER_FINISHED,
      payload: data.result
    })
    // console.log(data.result)
  } catch (error) {
    console.log(error)
  }
}




export default {
    getAllItem,
    registerUser,
    loginUser,
    logOut
}