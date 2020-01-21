import { FETCH_USER } from "../constants"

import firebase from 'firebase';

const fetchUserAction = () => {
    const {currentUser}  = firebase.auth();
    const users = [];
    return dispatch => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            const users = snapshot.val() ? Object.entries(snapshot.val())
                .map((user)=> {
                    const employee =  Object.assign({}, user[1]);
                    // console.log('from fetch user user[1] --->', user[1])
                    return employee;
                }) : [];

                // console.log("from fetch user ---> users, ", users)
            dispatch({
                type: FETCH_USER,
                payload: users.reduce(function(acc, cur, i) {
                    acc[i] = cur;
                    return acc;
                  }, {}),
                // payload: 
            });
        });
    }
}

export {fetchUserAction};