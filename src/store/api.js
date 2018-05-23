
export const getUsers = async(username) => {
    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors'
    }
    const url = `http://localhost:8080/api/users?username=${username}`;
    const response = await fetch(url, options);
    
    if (response.ok){
        return await response.json()
    }else{
        throw response.statusText;
    }
}


export const getAlbums = async(userid) => {
    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors'
    }
    const url = `http://localhost:8080/api/albums?userId=${userid}`;
    const response = await fetch(url, options);
    
    if (response.ok){
        return await response.json()
    }else{
        throw response.statusText;
    }
}