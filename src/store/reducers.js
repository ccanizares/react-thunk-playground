import {combineReducers} from "redux";
import {FETCH_USERS, FETCH_USERS_OK, FETCH_USERS_KO} from './actions';

const usersInitialState = {
    users: [],
    isFetching: false,
    error: ''
}

function users (state = usersInitialState, action) {
    switch (action.type) {
      case FETCH_USERS: 
        return {...state, isFetching: true, error: '', users: []}
      case FETCH_USERS_OK:
        return {...state, isFetching: false, error: '', users: action.users}
      default:
        return state;
    }
  }; 

const appReducer =  combineReducers({
  users
});

export default appReducer;