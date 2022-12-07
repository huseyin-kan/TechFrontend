import axios from "axios"

export default class ProductService{
    url = `https://localhost:44316/api/products/getall`
    getProducts(){
        return axios.get(this.url)
    }
} 