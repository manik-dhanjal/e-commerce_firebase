import CartItem from "../../components/cart-item/cart-item.component";

export const addItem = (initalState,item) =>{
    const exist = initalState.find(cartItem => cartItem.id===item.id)
    if(!exist)
        return [...initalState,{...item,quantity:1}];


         return initalState.map(cartItem =>{
             if(cartItem.id===exist.id)
                 return {...cartItem,quantity:cartItem.quantity+1}
             
            else
                return {...cartItem}
         }) 
        return initalState;
}

export const removeItem = (initalState,item) => {
    return initalState.filter(cartItem => cartItem.id!==item.id)
}
export const reduceItem = (initalState,item) => {
    if(item.quantity<=1) 
    return removeItem(initalState,item)

    return initalState.map(CartItem=>{
        if(CartItem.id!==item.id) return CartItem;
        return {...CartItem,quantity:CartItem.quantity-1}
    })
}