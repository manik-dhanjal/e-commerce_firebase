import React from 'react'
import CustomButton from "../custom-button/custom-button.components"
import CartItem from "../cart-item/cart-item.component"
import {connect} from "react-redux"
import "./cart-dropdown.styles.scss"
const CartDropdown = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className="cart-dropdown">
            <div className="cart-items-container">
                {cartItems.map(item => <CartItem item={item} key={"cart"+item.id}/>)}
            </div>
            <CustomButton>Checkout</CustomButton>
        </div>
    )
}
const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown)
