import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import productListReducer from "./productListReducer";


const rootReducer=combineReducers({
    changeCategoryReducer,
    productListReducer
})

export default rootReducer