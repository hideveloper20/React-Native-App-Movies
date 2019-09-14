import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

 class Home extends Component {
    render() {
        return this.props.children //Por que el componente va ser el padre de lo que ocurra en el resto de la aplicacion
    }
}

const styles = StyleSheet.create({})

export default Home;