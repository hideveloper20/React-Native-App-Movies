import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import Home from '../src/screens/containers/home';
import Header from '../src/sections/components/header';
import Suggestion from '../src/videos/containers/suggestion-list';
import Api from '../utils/api';
import Category from '../src/videos/containers/category-list';
import Movie from './screens/containers/movie';
import Search from './sections/containers/Search';
import {actionSuggestion} from '../actions/actions';

class app extends Component {
  /* state = {
    /* suggestionList: [],
    categoryList: [], 
  }; */
  async componentDidMount() {
    //Hago que se ejecute de una forma asyncrona
    const categoriesList = await Api.getMovies();
    //this.props.listarCategorias(categoriesList);
    //ESTO VA DIRECTAMENTE AL REDUCER
    /*  this.props.dispatch({
      //this.props por que el dispatch viene por las propiedades
      type: 'SET_CATEGORY_LIST', //Nombre de la acción
      payload: {
        //Aqui van los datos de la acción dentro de un key, segun el tutor se pone payload es por convención
        categoriesList,
      },
    }); */
    this.props.listarCategorias(categoriesList);

    const suggestionList = await Api.getSuggestion(10);
    //ESTO VA DIRECTAMENTE AL REDUCER
    this.props.listarSugerencias(suggestionList);
    /*  this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        //Aqui van los datos de la acción dentro de un key, segun el tutoor se pone payload es por convención
        suggestionList,
      },
    }); */
    /* console.log(movies);
    console.log('Categorias');
    console.log(categories); */
    /* this.setState({
      suggestionList: movies,
      categoryList: categories,
    }); */
  }

  render() {
    if (this.props.selectedMovie) {
      //Si hay una pelicula seleccionada, que si el key trae contenido, es true
      return <Movie />;
    }
    return (
      <Home>
        <Header>
          <Text>Hellouda</Text>
        </Header>

        {/* <Movie /> */}
        <Search />
        <Category />
        <Suggestion />
      </Home>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie, //Ahora tengo esta propiedad disponible dentro del componente
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listarCategorias: categoriesList => {
      dispatch({
        type: 'SET_CATEGORY_LIST', //Nombre de la acción
        //payload: {
        //Aqui van los datos de la acción dentro de un key, segun el tutoor se pone payload es por convención
        categoriesList,
        // },
      });
    },
    listarSugerencias: list => dispatch(actionSuggestion(list)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(app);
