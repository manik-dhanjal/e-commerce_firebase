import React, { Component } from 'react'
import directoryData from "./directory.data"
import MenuItems from "../menu-items/menu-items.components"
import "./directory.styles.scss"
 class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections: directoryData
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map((section,i) => (
                        <MenuItems {...section} key={`menu-item-${i}`}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory
