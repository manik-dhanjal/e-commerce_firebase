import React from 'react'
import "./single-collection.styles.scss"
import {selectShopCollection} from "../../redux/shop/shop.selectors"
import {connect} from "react-redux"
import { createStructuredSelector } from 'reselect'
import ProductCard from "../product-card/product-card.components"
const SingleCollection = ({collections,match}) => {
    const {title,items} = collections[match.params.category]
    return (
        <div className="single-collection">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.map(item=>(
                    <ProductCard key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections:selectShopCollection
})
export default connect(mapStateToProps)(SingleCollection)
