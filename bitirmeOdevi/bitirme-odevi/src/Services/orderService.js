import axios from "axios";

export default class OrderService{

    addOrder(order){
        return axios.post(`https://localhost:44316/api/orders/add`,order,{'Content-Type':'application/json'})
    }
    getOrder(){
        return axios.get(`https://localhost:44316/api/orders/getall`)
    }
    getOrdeByCustomerId(id){
        return axios.get(`https://localhost:44316/api/orders/getbycustomerid?id=`+id)
    }
    getLastOrder(){
        return axios.get(`https://localhost:44316/api/orders/getlastorder`)
    }
}