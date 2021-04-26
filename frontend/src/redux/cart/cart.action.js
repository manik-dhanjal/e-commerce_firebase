import cartActionType from "./cart.type"

export const addItemToCart = (item) =>({
    type:cartActionType.addItemToCart,
    payload:item
})

export const toggleCartVisibility = () =>({
    type:cartActionType.toogleCartVisibility
})