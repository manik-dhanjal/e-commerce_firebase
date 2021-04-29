import {createSelector} from "reselect"
import CartItem from "../../components/cart-item/cart-item.component"

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(selectCart,(cart)=>cart.cartItems)

export const selectCartItemCount = createSelector(selectCartItems,(cartItems)=>{
 return cartItems.reduce((totalItems,currentItem)=>{return totalItems+currentItem.quantity},0)
}) 

export const selectCartHidden = createSelector(selectCart,cart => cart.cartHidden)

export const selectCartTotal = createSelector(selectCartItems,(cartItems)=>{
    return cartItems.reduce((totalPrice,item)=>totalPrice+(item.quantity*item.price),0)
})