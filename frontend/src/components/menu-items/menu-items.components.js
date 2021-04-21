import React from 'react'
import {Link} from "react-router-dom"
import "./menu-item.styles.scss"
const MenuItems = ({title, imageUrl, size,linkUrl}) => {
    return (
        
        <Link to= {linkUrl} className={`${size} menu-item`} >
            <div className="background-image" style={{background:`url(${imageUrl})`}}/>
            <div className="content">
                <div className="title">
                    {title}
                </div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </Link>
    )
}

export default MenuItems
