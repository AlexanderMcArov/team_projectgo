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
                dispatch(contactUpdateItems())
            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}
export function contactDeleteItem(id){
    return (dispatch) => {
        Axios.delete('http://localhost:3334/contacts/' + id)
            .then(res=>{    
                dispatch(contactUpdateItems())
            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}
export function contactEditItem(item){
    return (dispatch) => {
        Axios.patch('http://localhost:3334/contacts/' + item.id,{
            name: item.name,
            sname: item.sname,
            number: item.number,
            email: item.email
        })
            .then(res=>{
                dispatch(contactUpdateItems())
            })
            .catch(err=>{
                console.log(err.responce);
            })
    }
}
export function contactUpdateItems(){
    return (dispatch) => {
        Axios.get('http://localhost:3334/contacts')
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
