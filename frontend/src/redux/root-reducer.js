import {combineReducers} from "redux"
import userReducer from "./user/user.reducer"
import cartReducers from "./cart/cart.reducer"
import directoryReducers from "./directory/directory.reducer"
import shopReducers from "./shop/shop.reducers"
export default combineReducers({
    user:userReducer,
    cart:cartReducers,
    directory:directoryReducers,
    shop:shopReducers
})

