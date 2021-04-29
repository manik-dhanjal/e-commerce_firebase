import {createSelector} from "reselect"

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(selectCart,(cart)=>cart.cartItems)

export const selectCartItemCount = createSelector(selectCartItems,(cartItems)=>{
 return cartItems.reduce((totalItems,currentItem)=>{return totalItems+currentItem.quantity},0)
}) 

export const selectCartHidden = createSelector(selectCart,cart => cart.cartHidden)