import React, { Component } from 'react'
import { StyleSheet, View, TextInput, AppRegistry } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';




export const Search = () => {


    return (

        <View>

            <TextInput
                placeholderTextColor="black"
                placeholder='Buscar pelicula'
                style={{
                    height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 15, marginHorizontal: 15,
                    marginBottom: 5,
                    paddingHorizontal: 15,
                    borderBottomColor: '#000',
                    flex: 1,
                    borderRadius: 15,
                    shadowColor: "#000",
                }}
            />

        </View>

    )
}


const styles = StyleSheet.create({


});