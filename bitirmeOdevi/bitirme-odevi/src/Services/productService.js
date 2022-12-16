import axios from "axios"

export default class ProductService{
    // url = `https://localhost:44316/api/products/getall`
    getProducts(order){
        if(order){
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
    postProduct(product){
        console.log(product)
        return axios.post(`https://localhost:44316/api/products/add`,product,{'Content-Type':'application/json'});
    }
} 