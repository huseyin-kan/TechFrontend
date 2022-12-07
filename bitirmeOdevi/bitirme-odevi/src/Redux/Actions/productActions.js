import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products){
    return{type:actionTypes.GET_PRODUCT_SUCCESS,payload:products}
}

export function getProducts(){
    return function(dispatch){
        let url="https://localhost:44316/api/products/getall"
        return fetch(url)
        .then(response=>response.json())
        .then(result =>dispatch(getProducts(result)))    
    }
}