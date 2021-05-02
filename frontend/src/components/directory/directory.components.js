import React, { Component } from 'react'
import MenuItems from "../menu-items/menu-items.components"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import "./directory.styles.scss"
import { selectDirectorySection } from '../../redux/directory/directory.selectors'
 class Directory extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.props.sections.map((section,i) => (
                        <MenuItems {...section} key={`menu-item-${i}`}/>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySection
})
export default connect(mapStateToProps)(Directory)
