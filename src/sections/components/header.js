import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView} from 'react-native';

//Componente funcional
function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/paisaje.jpg')}
            style={styles.logo}
          />
          <View style={styles.right}>
            {/*<Text>{props.title}</Text>*/}
            {props.children}
            {/*Extender otros tipos de componentes, que puedo enviarle como hijo - Todos los hijos que vengan dentro del header */}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    //backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
