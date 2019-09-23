import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import Api from '../../../utils/api';
import {connect} from 'react-redux';

class Search extends Component {
  state = {
    text: '',
  };
  handleSubmit = async () => {
    //console.log(this.state.text);
    //Código asincrono
    const movies = await Api.searchMovie(this.state.text);
    console.log(movies);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0], //Del array tomo el primer elemento
      },
    });
  };

  handleChangeText = text => {
    this.setState({
      text, //key que se llama text
    });
  };

  render() {
    return (
      <TextInput
        placeholder="Busca tu pelicula favorita"
        autoCorrect={false}
        autoCapitalize="none" //Para no poner mayuscula a nada que ponga en el texto
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default connect()(Search);
