import shopTypes from "./shop.types"


export const updateShop = (collections) => {
    return {
        type:shopTypes.updateShop,
        payload:collections
    }
}