import React from 'react'
import "./checkout.styles.scss"
import CheckoutItem from "../checkout-item/checkout-item.components"
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/cart/cart.selectors"
const CheckoutComponent = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className="checkout-table">
            <div className="head-row">
                <div className="head-col">
                    Product
                </div>
                <div className="head-col">
                    Description
                </div>
                <div className="head-col" >
                    Quantity
                </div>
                <div className="head-col">
                    Price
                </div>
                <div className="head-col" style={{textAlign:"right"}}>
                    Remove
                </div>
            </div>
            <hr/>
            <div className="table-body">
                {cartItems.map(item => <CheckoutItem item={item} key={"checkout"+item.id}/>)}
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})
export default connect(mapStateToProps)(CheckoutComponent)
