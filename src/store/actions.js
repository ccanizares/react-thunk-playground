import {getUsers, getAlbums} from './api';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_OK = 'FETCH_USERS_OK';
export const FETCH_USERS_KO = 'FETCH_USERS_KO';

export const fetchUsers = (username) => {
    return (dispatch) => {
        dispatch({type: FETCH_USERS});
        getUsers(username)
          .then((users) => {
            var promises = [];
            users.forEach((user) => promises.push(getAlbums(user.id)));
            Promise.all(promises).then((values) => { 
                users.forEach((user) => { user.albums=0;values.forEach((value) => user.albums+=value.filter((v) => user.id === v.userId).length) });
                dispatch(fetchUsersOk(users));
            }).catch((error) => dispatch(fetchUsersko(error)))
          })
          .catch((error) => dispatch(fetchUsersko(error)));
      }; 
}

export const fetchUsersOk = (users) => {
    return {
        type: FETCH_USERS_OK, users: users
    }
}

export const fetchUsersko = (error) => {
    return {
        type: FETCH_USERS_KO, isFetching: false, error: error, users: []
    }
}




