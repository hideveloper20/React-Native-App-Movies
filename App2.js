import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Suggestion from './src/videos/containers/suggestion-list';
import Api from './utils/api';
import Category from './src/videos/containers/category-list';
import Player from './src/player/containers/player';
import {Provider} from 'react-redux';
import store from './store/store';

//Los containers se pueden conectar al estado de redux

class App2 extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    //Hago que se ejecute de una forma asyncrona
    const movies = await Api.getSuggestion(10);
    const categories = await Api.getMovies();
    console.log(movies);
    console.log('Categorias');
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header>
            <Text>Hellouda</Text>
          </Header>
          <Player />
          <Text>Buscador</Text>
          <Text>Categorias</Text>
          <Category list={this.state.categoryList} />
          <Suggestion list={this.state.suggestionList} />
        </Home>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App2;
