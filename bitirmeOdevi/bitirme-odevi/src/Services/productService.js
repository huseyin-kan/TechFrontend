import axios from "axios"

export default class ProductService{
    // url = `https://localhost:44316/api/products/getall`
    getProducts(){
        return axios.get(`https://localhost:44316/api/products/getall`)
    }
    getProductById(productId){
        return axios.get(`https://localhost:44316/api/products/getbyid?id=`+productId)
    }
    getProductsByCategoryId(categoryId){
        return axios.get(`https://localhost:44316/api/products/getbycategoryid?id=`+categoryId)
    }
} 