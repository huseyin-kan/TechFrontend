import { combineReducers } from "redux";
import cartReducer from "./Reducers/cartReducer";
import searchReducer from "./Reducers/searchReducer";



const rootReducer=combineReducers({
    cart : cartReducer,
    filter:searchReducer      
})

export default rootReducer;