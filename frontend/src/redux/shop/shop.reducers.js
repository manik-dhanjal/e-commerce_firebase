import shopTypes from "./shop.types"
const INITIAL_STATE = {
    collections:{}
}
const shopReducers = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case shopTypes.updateShop :{
            return {
                ...state,
                collections:action.payload
            }
        }
        default:{return state}
    }
}

export default shopReducers