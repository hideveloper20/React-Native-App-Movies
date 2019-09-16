import {createStore} from 'redux';
import reducer from '../reducers/reducer-video';
import {persistStore, persistReducer} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';

/* const store = createStore(reducer, {
  //videos: 'Práctica',
  //Inicializo con los datos vacíos
  categoryList: [],
  suggestionList: [],
}); //{} estado inicial */

//Uso de persistedReducer

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer); //Le paso el nuevo reducer especial de redux-persist
const persistor = persistStore(store);

export {store, persistor};
