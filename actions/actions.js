export const actionSuggestion = suggestionList => {
  return {
    type: 'SET_SUGGESTION_LIST',
    /*  payload: {
      suggestionList,
    }, */
    suggestionList,
  };
};

export const actionSelectedMovie = item => {
  return {
    type: 'SET_SELECTED_MOVIE',
    movie: item,
  };
};

export const actionCloseMovie = () => {
  return {
    type: 'SET_SELECTED_MOVIE',
  };
};
