import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import {connect} from 'react-redux';
import Details from '../../videos/components/details';
import {Animated} from 'react-native';
import {actionCloseMovie} from '../../../actions/actions';

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0), //Arranque en 0 el valor inicial, solo recibe de 0 a 1
  };
  closeVideo = () => {
    //Tiene que despachar una accion y para dispacharla tiene que estar conectado al store
    /* this.props.dispatch({
      type: 'SET_SELECTED_MOVIE', //Accion
      payload: {
        movie: null, //Con esto va dar falso en app y me manda al principal
      },
    }); */
    this.props.closeMovieSelected();
  };
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1, //Cambio el valor 1
      duration: 1000, //Tiempo de demora de la animacion
    }).start();
  }
  render() {
    return (
      <Animated.View style={{flex: 1, opacity: this.state.opacity}}>
        <MovieLayout>
          <Header>
            <Close onPress={this.closeVideo} />
          </Header>
          <Player />
          <Details {...this.props.movie} />
        </MovieLayout>
      </Animated.View>
    );
  }
}

//Traigo del estado una propiedad que se llama movie
const mapStateToProps = state => {
  return {
    movie: state.selectedMovie,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeMovieSelected: () => dispatch(actionCloseMovie()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
