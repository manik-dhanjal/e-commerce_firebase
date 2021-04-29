import React from 'react'
import {connect} from "react-redux"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import {toggleCartVisibility} from "../../redux/cart/cart.action"
import {createStructuredSelector} from "reselect"
import {selectCartItemCount} from "../../redux/cart/cart.selectors"
import "./cart-icon.styles.scss"
const CartIcon = ({toggleCartVisibility,itemCount}) => {
    return (
        <div className="cart-icon option" onClick={() => console.log(toggleCartVisibility())}>
            <ShoppingIcon className="shopping-bag"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapDispatchToProps = (dispatch) =>({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
})
const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemCount
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
