import Axios from 'axios'
import { 
    FETCH_AUTH_LOGIN
 } from './constans'

const URL = 'http://localhost:15104/'

export function contactAddItem({login,password,email}){
    return (dispatch) => {
        Axios.post(URL+'users',{
            login,
            password,
            admin: false
        })
            .then(res=>{

            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}

export function authLoginUser({login,password}){
    return (dispatch) => {
        Axios.get(URL+'users/?login='+login+'&password'+password)
            .then(res=>{
                console.log(res.data);
                dispatch(fetchAddItem(res.data))
            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}

export function fetchAddItem(userInfo){
    return {
        type: FETCH_AUTH_LOGIN,
        userInfo
    }
}
