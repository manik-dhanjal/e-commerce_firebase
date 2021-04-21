import React, { Component } from 'react'

 class Shop extends Component {
     constructor(props){
         super(props);
         console.log(this.props.match.params.type)
     }
    render() {
        return (
            <div>
                {this.props.match.params.type}
            </div>
        )
    }
}

export default Shop
