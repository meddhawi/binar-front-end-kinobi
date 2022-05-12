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


export const apiReducer = (state = {}, action) => {
    switch(action.type){
        case LOG_OUT:
            return{
                ...state,
                loggedIn: false
            }

        case REGISTER_REQUEST:
            return{
                ...state,
                isLoading: true,
            }
        
        case REGISTER_FINISHED:
            return{
                ...state,
                isLoading: false,
                auth: action.payload,
            }
        
        case REGISTER_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}