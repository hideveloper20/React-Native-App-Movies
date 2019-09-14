import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Layout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{props.video}</View>
      <View style={styles.overlay}>
        {props.loading && props.loader //Si esta cargando que imprima el loader
        }
      </View>
      {props.controls}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
