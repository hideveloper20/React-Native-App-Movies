import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Suggestion from './src/videos/containers/suggestion-list';
import Api from './utils/api';
import Category from './src/videos/containers/category-list';
import Player from './src/player/containers/player';
import {Provider} from 'react-redux';
//import store from './store/store';
import {PersistGate} from 'redux-persist/integration/react'; //Un componente que se va usar como si fuera el provider para unir la aplicacion de reduxpersist con la apliacion que ya tengo dentro de react
import {store, persistor} from './store/store';

//Los containers se pueden conectar al estado de redux

class App2 extends Component {
  /* state = {
    /* suggestionList: [],
    categoryList: [], 
  }; */
  async componentDidMount() {
    //Hago que se ejecute de una forma asyncrona
    const categoriesList = await Api.getMovies();
    //ESTO VA DIRECTAMENTE AL REDUCER
    store.dispatch({
      type: 'SET_CATEGORY_LIST', //Nombre de la acción
      payload: {
        //Aqui van los datos de la acción dentro de un key, segun el tutoor se pone payload es por convención
        categoriesList,
      },
    });
    const suggestionList = await Api.getSuggestion(10);
    //ESTO VA DIRECTAMENTE AL REDUCER
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        //Aqui van los datos de la acción dentro de un key, segun el tutoor se pone payload es por convención
        suggestionList,
      },
    });
    /* console.log(movies);
    console.log('Categorias');
    console.log(categories); */
    /* this.setState({
      suggestionList: movies,
      categoryList: categories,
    }); */
  }
  render() {
    return (
      <Provider store={store}>
        {/*Ahora es un store que puede persistir datos */}
        <PersistGate loading={<Text>Cargando...</Text>} persistor={persistor}>
          <Home>
            <Header>
              <Text>Hellouda</Text>
            </Header>
            <Player />
            <Text>Buscador</Text>
            <Text>Categorias</Text>
            <Category />
            <Suggestion />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App2;
