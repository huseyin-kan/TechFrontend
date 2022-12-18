import axios from "axios";

export default class UserService{

    getUsers(){
        return axios.get(`https://localhost:44316/api/users/getall`)
    }
    getUserById(id){
        return axios.get(`https://localhost:44316/api/users/getuserbyid?id=`+id)
    }
    addUser(user){
        return axios.post(`https://localhost:44316/api/users/add`,user,{'Content-Type':'application/json'})
    }
    login(user){
        return axios.post(`https://localhost:44316/api/users/login`,user,{'Content-Type':'application/json'})
    }
    updateUser(user){
        return axios.post(`https://localhost:44316/api/users/update`,user,{'Content-Type':'application/json'})
    }

}