import React from 'react'
import {Route} from "react-router"
import "./shop.styles.scss"
import CollectionOverview from "../../components/collection-overview/collection-overview.components"
import SingleCollection from "../../components/single-colllection/single-collection.components"
import {selectIsShopLoading} from "../../redux/shop/shop.selectors"
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
 const Shop = ({match,isLoading}) =>{

        return (
            <div className="shop-page">
                <Route exact path = {match.path} render = {props => <CollectionOverview {...props} isLoading={isLoading}/>}/>
                <Route  path = {`${match.path}/:category`} render={ props => <SingleCollection {...props} isLoading={isLoading}/>}/>
            </div>
        )
}
const mapStateToProps = createStructuredSelector({
  isLoading:selectIsShopLoading  
})
export default connect(mapStateToProps)(Shop)
