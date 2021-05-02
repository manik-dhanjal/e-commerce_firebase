import { createSelector } from "reselect"

const selectShop = (state) => state.shop;

export const selectShopCollectionPreview = createSelector(selectShop,(shop)=>{
    const collectionObj = shop.collections
    return Object.keys(collectionObj).map(key =>{
        const filteredItems = collectionObj[key].items.filter((item,index) => index<4)
        const item = {...collectionObj[key],items: filteredItems}
        return item;
    })
})

export const selectShopCollection = createSelector(selectShop,(shop)=> shop.collections)

