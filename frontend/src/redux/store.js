import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import rootReducer from "./root-reducer"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const middlerwares = [logger]
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
  }

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer,applyMiddleware(...middlerwares));
export const persistor = persistStore(store)
export default store;