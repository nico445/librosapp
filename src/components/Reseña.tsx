import React, { Component } from 'react'
import { Platform, StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { HorizontalSlider } from './HorizontalSlider';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Reseña = () => {


    const handlePress = () => false
    return (

        <View style={styles.MainContainer}>

            <Text style={{ fontSize: 20, marginTop: -60 }}>
                Escribe una reseña
            </Text>
            <Text style={{ fontSize: 15, marginTop: 20 }}>
                Nombre de usuario
            </Text>

            <TextInput
                style={styles.TextInputStyleClass1}
                placeholder={"Escribe aqui el nombre de usuario"}
                placeholderTextColor={"#9E9E9E"}
                numberOfLines={10}
                multiline={true}
            />
            <Text style={{ fontSize: 15, marginTop: 20 }}>
                Reseña
            </Text>

            <TextInput
                style={styles.TextInputStyleClass}
                placeholder={"Escribe aqui tu reseña"}
                placeholderTextColor={"#9E9E9E"}
                numberOfLines={10}
                multiline={true}
            />

            <TouchableOpacity
                style={styles.TouchableOpacity}
            >
                <Text style={{textAlign: 'center', marginTop:10}} >
                    Publicar
                </Text>
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        justifyContent: 'center',
        margin: 20

    },

    TextInputStyleClass: {

        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20,
        height: 150,
        marginTop: 10

    },
    TextInputStyleClass1: {

        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20,
        height: 40,
        marginTop: 10

    },
    TouchableOpacity: {

            marginTop: 10,
            borderWidth: 2,
            height: 40, 
            borderColor: '#9E9E9E', 
            fontSize: 15, 
            marginHorizontal: 80,
            marginBottom: 5,
            paddingHorizontal: 15,
            borderRadius: 15,
            backgroundColor: '#42C064'
            
    
    }

});