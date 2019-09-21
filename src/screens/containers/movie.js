import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import {connect} from 'react-redux';
import Details from '../../videos/components/details';

class Movie extends Component {
  closeVideo = () => {
    //Tiene que despachar una accion y para dispacharla tiene que estar conectado al store
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE', //Accion
      payload: {
        movie: null, //Con esto va dar falso en app y me manda al principal
      },
    });
  };
  render() {
    return (
      <MovieLayout>
        <Header>
          <Close onPress={this.closeVideo} />
        </Header>
        <Player />
        <Details {...this.props.movie} />
      </MovieLayout>
    );
  }
}

//Traigo del estado una propiedad que se llama movie
const mapStateToProps = state => {
  return {
    movie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(Movie);
