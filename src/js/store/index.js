import { createStore, applyMiddleware } from 'redux'
import {
  persistStore, persistReducer,
  persistCombineReducers, autoRehydrate
} from 'redux-persist'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import { storeMiddleWare } from '../middleware/store'

import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

import storage from 'redux-persist/lib/storage'

const config = {
  key: 'root',
  storage: storage,
  debug: true,
  stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(config, reducer)

/*const reducers = persistCombineReducers(config, {
    reducer
});*/

const stores = (state) => {
  const store = createStore(persistedReducer, state, applyMiddleware(thunk, storeMiddleWare))
  const persistor = persistStore(store);

  return { store, persistor };
  //return createStore(reducer, state, applyMiddleware(thunk, storeMiddleWare))
}

export default stores
