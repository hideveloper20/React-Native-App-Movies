import {createStore} from 'redux';
import reducer from '../reducers/reducer-video';

const store = createStore(reducer, {
  //videos: 'Práctica',
  //Inicializo con los datos vacíos
  categoryList: [],
  suggestionList: [],
}); //{} estado inicial

export default store;
