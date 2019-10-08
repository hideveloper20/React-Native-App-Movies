import {combineReducers} from 'redux';
const videos = (state = {}, action) => {
  //En la acción vinenen los datos para el nuevo estado y lo voy armar dentro de un nuevo objeto
  switch (action.type) {
    case 'SET_CATEGORY_LIST':
      //return {...state, ...action.payload}; //Junto el objeto state con el que viene del acction
      return {...state, ...action.categoriesList};
    /* //El estado que empieza con {} va ser despues de esta acción, un estado que tenga un key con el que yo haya enviado los datos
      {
        categories: [];
      } */

    //Lo hare en un reducer aparte
      case 'SET_SUGGESTION_LIST':
      // return {...state, ...action.payload};
      return {...state, ...action.suggestionList};
    //------------

    case 'SET_SELECTED_MOVIE':
      return {...state, selectedMovie: action.payload.movie}; //Agrego un key nuevo, selectedMovie

    default:
      //Es como si no hiciera nada, retorno el state anterior
      return state;
  }
};

/* const suggestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SUGGESTION_LIST':
      return {...state, ...action.suggestionList};

    default:
      state;
  }
};

const rootReducers = combineReducers({
  videos,
  suggestionsReducer,
});
export default rootReducers; */
export default videos;
