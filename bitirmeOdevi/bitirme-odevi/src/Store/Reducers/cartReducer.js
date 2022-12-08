import { ADD_TO_CART } from "../Actions/cartAction";
import cartItems from "../InitialValues/cartItems"

const initialState={
    cartItems:cartItems
}

export default function cartReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_TO_CART:
            let product=state.cartItems.find(c=>c.product.productId===payload.id)
            break;
    
        default:
            break;
    }
}