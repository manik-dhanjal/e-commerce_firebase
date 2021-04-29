import cartActionType from "./cart.type"

export const addItemToCart = (item) =>({
    type:cartActionType.addItemToCart,
    payload:item
})
export const removeItemFromCart = (item) => ({
    type: cartActionType.removeItemFromCart,
    payload: item
})
export const reduceItemQuantityFromCart = (item) => ({
    type: cartActionType.reduceItemQuantityFromCart,
    payload: item
})
export const toggleCartVisibility = () =>({
    type:cartActionType.toogleCartVisibility
})