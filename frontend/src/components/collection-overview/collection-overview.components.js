import React from 'react'
import CollectionPreview from "../collection-preview/collection-preview.components"
import {createStructuredSelector} from "reselect"
import {selectShopCollectionPreview} from "../../redux/shop/shop.selectors"
import {connect} from "react-redux"
import "./collection-overview.styles.scss"
const CollectionOverview = ({collections}) => {
    return (
        <div>
             {
                   collections.map(({id,...otherCollectionProps}) =>(
                      <CollectionPreview key={id} {...otherCollectionProps} />
                   ))
               }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections:selectShopCollectionPreview
})
export default connect(mapStateToProps)(CollectionOverview)
