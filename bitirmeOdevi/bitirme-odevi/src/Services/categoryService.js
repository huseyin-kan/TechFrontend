import axios from "axios";

export default class CategoryService{
    getCategories(){
        return axios.get(`https://localhost:44316/api/categories/getall`)
    }
}