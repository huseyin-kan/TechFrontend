import * as actionTypes from "../Actions/actionTypes"
import initalState from "./initalState";

export default function productListReducer(state=initalState.products,action){
        switch(action.type){
            case actionTypes.GET_PRODUCT_SUCCESS:
                return action.payload
            default:
                return state
        }
}