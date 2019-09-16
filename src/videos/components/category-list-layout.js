import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';

//Componente funcional
const CategoryListLayout = props => {
  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default CategoryListLayout;
