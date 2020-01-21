import { CREATE_USER, USER_CREATED } from "../constants"

import firebase from 'firebase';
import { navigate } from "../../navigationRef";


const createUserAction = ({name, phone}) =>{
    // return{
    //     type: CREATE_USER,
    //     payload: {name, phone}
    // }
    const id = Math.floor(Math.random()*999);
    const userName = firebase.auth();
    const {currentUser} = firebase.auth();
    console.log('current user from action -->', currentUser);
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).
            push({id, name, phone})
            .then(() => {
                dispatch({type: CREATE_USER,
                    payload: {id, name, phone}});
                
                navigate('UserList')
            })
    }
}

export {createUserAction};