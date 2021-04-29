import React from 'react'
import CustomButton from "../custom-button/custom-button.components"
import CartItem from "../cart-item/cart-item.component"
import {connect} from "react-redux"
import "./cart-dropdown.styles.scss"
import {selectCartItems} from "../../redux/cart/cart.selectors"
import {createStructuredSelector} from "reselect"
import {withRouter} from "react-router-dom"
import {toggleCartVisibility} from "../../redux/cart/cart.action"
const CartDropdown = ({cartItems,toggleCart,history}) => {
const handleCheckoutClick = () => {
    toggleCart();
    history.push("/checkout")
}
    return (
        <div className="cart-dropdown">
           
            <div className="cart-items-container">
                {
                cartItems.length?
                    cartItems.map(item => <CartItem item={item} key={"cart"+item.id}/>)
                :<div className="empty-cart-msg">Add items to your Cart Now</div>}
            </div>
            {cartItems.length?<CustomButton onClick={handleCheckoutClick} >Checkout</CustomButton>:null}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})
const mapDispatchToProps = (dispatch) =>({
    toggleCart: () => dispatch(toggleCartVisibility())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown))
