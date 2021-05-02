import React, { Component } from 'react'
import {Route,Switch,Redirect} from "react-router"
import "./shop.styles.scss"
import CollectionOverview from "../../components/collection-overview/collection-overview.components"
import SingleCollection from "../../components/single-colllection/single-collection.components"
 const Shop = ({match}) =>{
     console.log(match)
        return (
            <div className="shop-page">
                <Route exact path = {match.path} component={CollectionOverview}/>
                <Route  path = {`${match.path}/:category`} component={SingleCollection}/>
            </div>
        )
}

export default Shop
