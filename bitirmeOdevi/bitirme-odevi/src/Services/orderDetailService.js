import axios from "axios";

export default class OrderDetailService{

    getOrderDetailsByOrderId(id){
        return axios.get(`https://localhost:44316/api/orderdetails/getallbyorderid?id=`+id)
    }

    addOrderDetail(orderDetails){
        return axios.post(`https://localhost:44316/api/orderdetails/add`,orderDetails,{'Content-Type':'application/json'})
    }

}