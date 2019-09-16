const videos = (state = {}, action) => {
  //En la acción vinenen los datos para el nuevo estado y lo voy armar dentro de un nuevo objeto
  switch (action.type) {
    case 'SET_CATEGORY_LIST':
      return {...state, ...action.payload}; //Junto el objeto state con el que viene del acction
    /* //El estado que empieza con {} va ser despues de esta acción, un estado que tenga un key con el que yo haya enviado los datos
      {
        categories: [];
      } */

    case 'SET_SUGGESTION_LIST':
      return {...state, ...action.payload};

    default:
      //Es como si no hiciera nada, retorno el state anterior
      return state;
  }
};

export default videos;
