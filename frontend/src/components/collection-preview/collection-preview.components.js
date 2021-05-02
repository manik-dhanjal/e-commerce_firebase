import React from 'react'
import "./collection-preview.styles.scss"
import ProductCard from '../product-card/product-card.components'
import {withRouter} from "react-router-dom"
const CollectionPreview = ({title,items,routeName,history,match}) => {
    return (
        <div className="collection-preview">
            <h1 className='title' onClick = {() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
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

export default withRouter(CollectionPreview)
