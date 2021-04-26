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