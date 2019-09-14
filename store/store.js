import {createStore} from 'redux';
import reducer from '../reducers/reducer-video';

const store = createStore(reducer, {
  videos: 'Práctica',
}); //{} estado inicial

export default store;
