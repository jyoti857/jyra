import { CREATE_USER, USER_CREATED, EDIT_USER, FETCH_USER } from "../../actions/constants";

const initialState = {
    name: 'jyoti',
    phone: '',
    users: []
}

const createUserReducer = (state = initialState, action) =>{
    switch(action.type){
        case CREATE_USER:{
            const {id, name, phone} = action.payload;
            return{
                ...state,
                name,
                phone,
                users: state.users.concat({id, name, phone})
            }
        }
        case USER_CREATED: {
            return{
                initialState
            }
        } 
        case EDIT_USER:{
            const {id, name, phone} = action.payload;
            const user = state.users.find(user => user.id === id);
            const indexOf = state.users.indexOf(user);
            const sta = {...state};
            const arr = [...sta.users];
            arr[indexOf] = {id, name, phone};
            return{
                ...state, 
                name, 
                phone,
                users: arr,
            }
        }  
        case FETCH_USER:{
            console.log("fetch user reducers --->", Object.values(action.payload))
            return {
                ...state,
                users: [...state.users, Object.values(action.payload)]
            }
        }
        default: return state
    }
} 

export default createUserReducer;