import React from 'react'
import "./checkout-item.styles.scss"
import {addItemToCart, reduceItemQuantityFromCart, removeItemFromCart} from "../../redux/cart/cart.action"
import {connect} from "react-redux"
const CheckoutItem = ({item,removeItem,addItem,reduceItem}) => {
    const {name,imageUrl,quantity,price} = item
    return (
        <div className = "checkout-item">
            <div className = "image-container">
                <img src = {imageUrl} alt={name}/>
            </div>
            <div className = "description"> {name} </div>
            <div className = "quantity"><span id="left-ar" onClick={()=>reduceItem(item)}>&#10094;</span> {quantity} <span id="right-ar" onClick= {() => addItem(item)}>&#10095;</span></div>
            <div className = "price"> ${price} </div>
            <div className = "remove" onClick={()=> removeItem(item)}>  <span>&#10006;</span> </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    removeItem:(item)=> dispatch(removeItemFromCart(item)),
    reduceItem: (item) => dispatch(reduceItemQuantityFromCart(item)),
    addItem: (item) => dispatch(addItemToCart(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem)
