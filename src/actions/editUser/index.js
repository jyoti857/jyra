import {EDIT_USER} from '../constants';
import { navigate } from '../../navigationRef';

const editUserAction = ({id, name, phone}) => {
    return dispatch =>{
        console.log("from edit user action --->", id, name, phone)
        dispatch({
            type: EDIT_USER,
            payload: {id, name, phone}
        });
        navigate('UserList');
    }
}

export {editUserAction};