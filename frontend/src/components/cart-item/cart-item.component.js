import React from 'react'
import "./cart-item.styles.scss"

const CartItem = ({item}) => {
    const {imageUrl,name,quantity,price} = item;
    return (
        <div className="cart-item">
            <div className="image">
                <img src={imageUrl} alt={name}/>
            </div>
            <div className="content">
                <div className="title">{name}</div>
                <div className="quatityXprice">{quantity} X ${price}</div>
            </div>
        </div>
    )
}

export default CartItem
