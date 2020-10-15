import {
    // FETCH_AUTH_SIGN,
    FETCH_AUTH_LOGIN
} from '../actions/constans'

const initialState = {
    auth: []
}

export default function authReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_AUTH_LOGIN:
            return{
                ...state,
                auth: action.payload
            }
    
        default:
            return state
    }
}