import axios from "axios"

export default class ProductService{
    // url = `https://localhost:44316/api/products/getall`
    getProducts(order){
        if(order){
            console.log("order bölümüne girdi")
            return axios.get(`https://localhost:44316/api/products/getall?order=`+order)
        }
        return axios.get(`https://localhost:44316/api/products/getall`)
    }
    getProductById(productId){
        return axios.get(`https://localhost:44316/api/products/getbyid?id=`+productId)
    }
    getProductsByCategoryId(categoryId){
        return axios.get(`https://localhost:44316/api/products/getbycategoryid?id=`+categoryId)
    }
    getProductsByDescId(){
        return axios.get(`https://localhost:44316/api/products/getall?order=desc`)
    }
    getProductsByUnitPrice(order){
        if(order==="desc"){
            return axios.get(`https://localhost:44316/api/products/getproductsbyprice?order=desc`)
        }
        else if(order==="asce"){
            return axios.get(`https://localhost:44316/api/products/getproductsbyprice?order=asce`)
        }
        return axios.get(`https://localhost:44316/api/products/getall`)
    }
} 