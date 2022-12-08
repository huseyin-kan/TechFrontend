import { combineReducers } from "redux";
import cartReducer from "./Reducers/cartReducer";



const rootReducer=combineReducers({
    cart : cartReducer                           
})

export default rootReducer;