import React from 'react'
import {connect} from "react-redux"
import CustomButton from "../custom-button/custom-button.components"
import {addItemToCart} from "../../redux/cart/cart.action"
import "./product-card.styles.scss"

const ProductCard = ({item,addItemToCart}) => {
    const {name,imageUrl,price} = item;
    return (
        <div className="product-card">
            <div className="image">
                <img src={imageUrl} alt={name}/>
                <div className="overlay-btn">
                    <CustomButton inverted onClick={() => addItemToCart(item)}>Add To Cart</CustomButton>
                </div>
            </div>
            <div className="content">
                <div className="title">{name}</div>
                <div className="price">${price}</div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
 addItemToCart: item => dispatch(addItemToCart(item))
})
export default connect(null,mapDispatchToProps)(ProductCard)
