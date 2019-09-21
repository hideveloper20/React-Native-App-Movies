import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ActivityIndicator} from 'react-native';

const loading = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/space.jpg')}
        style={styles.logo}
      />
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default loading;
