import {applyMiddleware, createStore, compose} from 'redux';
import logger from 'redux-logger';
//import {persistStore, persistReducer} from 'redux-persist';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };
//const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer, compose(
//   applyMiddleware(thunk),
//   //applyMiddleware(logger)
// ));

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  //applyMiddleware(logger)
));
//export const persistor = persistStore(store);
