import React from 'react'
import {SpinnerOverlay,SpinnerContainer} from "./with-spinner.styles"
const withSpinner = WrapperComponent => ({isLoading,...otherprops}) =>{
    console.log(isLoading)
    return (
        <>
            {
                isLoading?
                    <SpinnerOverlay>
                        <SpinnerContainer/>
                    </SpinnerOverlay>
                    :<WrapperComponent {...otherprops}/>
            }
        </>
    )
}

export default withSpinner
