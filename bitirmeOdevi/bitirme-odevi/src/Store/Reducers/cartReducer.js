import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartAction";
import { cartItems } from "../InitialValues/cartItems";

const initialState={
    cartItems:cartItems
}

export default function cartReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_TO_CART:
            let product=state.cartItems.find(c=>c.product.productId===payload.productId)
            if (product) {
                product.quantity++
                return{
                    ...state
                }
            } else {
                return{
                    ...state,
                    cartItems:[...state.cartItems,{quantity:1,product:payload}]
                }
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter((c)=>c.product.productId!==payload.productId)
            }
    
        default:
            return state
    }
}