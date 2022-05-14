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




export const apiReducer = (state = {}, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        
        case LOGIN_FINISHED:
            return{
                ...state,
                auth: action.payload,
                isLoading: false,
                loggedIn: true
            }
        
        case LOGIN_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }

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
                // api: action.payload,
            }
        
        case REGISTER_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        
         case ALL_USER_REQUEST:
            return{
                ...state,
                isLoading: true,
            }
        
        case ALL_USER_FINISHED:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
            }
        
        case ALL_USER_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state 
    }
}