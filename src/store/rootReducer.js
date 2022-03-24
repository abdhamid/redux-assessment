import { combineReducers } from "redux";
import cartReducer from './cart'
import productReducer from './product-new'

export default combineReducers({
    products: productReducer,
    carts: cartReducer
})