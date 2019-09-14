import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const VerticalSeparator = props => {
    return(
       
        <View style={[styles.separator,
            {
                borderTopColor:(props.color) ? props.color : '#eaeaea'
            }
        ]} >
         {/* Estilo dinámico */}
            <Text>Esto es un separador</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    separator:{
        borderTopWidth: 1
    }
})

export default VerticalSeparator
