import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight, //Mientra esta el dedo encima del boton, puedaa hacer un highlight de algun tipo de color, ponerse background de algun tipo de color
  TouchableOpacity, //Para pulsar, genere un destello
  TouchableWithoutFeedback, //No va hacer nada
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayPause = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="#25E030"
      hitSlop={{
        //La distancia del entorno que va funcionar el boton de pause
        left: 10,
        top: 10,
        right: 10,
        bottom: 10,
      }}>
      {/*  {props.paused ? (
        <Text style={styles.button}>PLAY</Text>
      ) : (
        <Text style={styles.button}>PAUSE</Text>
      )} */}
      {props.paused ? (
        <Icon name="play" size={20} style={styles.button} />
      ) : (
        <Icon name="pause" size={20} style={styles.button} />
      )}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  },
});

export default PlayPause;
