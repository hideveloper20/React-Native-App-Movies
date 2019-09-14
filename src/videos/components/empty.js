import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {EmptyError} from 'rxjs';

const Empty = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text:{
      fontSize: 16
  }
});

export default Empty;
