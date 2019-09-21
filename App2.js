import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Loading from './src/sections/components/loading';
import AppLayout from './src/app';

import {Provider} from 'react-redux';
//import store from './store/store';
import {PersistGate} from 'redux-persist/integration/react'; //Un componente que se va usar como si fuera el provider para unir la aplicacion de reduxpersist con la apliacion que ya tengo dentro de react
import {store, persistor} from './store/store';

//Los containers se pueden conectar al estado de redux

class App2 extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*Ahora es un store que puede persistir datos */}
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App2;
