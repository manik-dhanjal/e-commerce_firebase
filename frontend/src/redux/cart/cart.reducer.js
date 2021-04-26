import cartActionType from "./cart.type"
import {addItem} from "./cart.utils"
const  INITIAL_STATE = {
    cartHidden:true,
    cartItems:[]
}

const cartReducers = (state = INITIAL_STATE, action) =>{
    console.log(action)
    switch(action.type){
        case cartActionType.toogleCartVisibility:{
            return {
                ... state,
                cartHidden:!state.cartHidden
            }
        }
        case cartActionType.addItemToCart:{
            return {
                ...state,
                cartItems:addItem(state.cartItems,action.payload)
            }
        }
        default: {
            return state
        }
    }
}

export default cartReducers;

