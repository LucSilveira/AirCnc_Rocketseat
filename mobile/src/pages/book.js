import React, { useState } from 'react'
import { View, Alert, Text, TextInput, AsyncStorage, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

export default function Book({ navigation }){
    const [date, setDate] = useState('')
    const id = navigation.getParams('id')

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user')
        await api.post(`/spots/${id}/bookings`, { date }, {
            headers : { user_id }
        })

        Alert.alert('A sua solicitação de reservada foi enviada!')
        navigation.navigate('Spots')
    }

    function handleSubmitCancel({ navigation }){
        navigation.navigate('Spots')
    }

    return (
        <SafeAreaView style={estilos.container}>
            <Text style={estilos.label}>Data de seu interesse!!</Text>
            <TextInput
                style={estilos.inputs}
                placeholder='Qual data você gostaria de reservar'
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />
            <TouchableOpacity style={estilos.buttons} onPress={handleSubmit}>
                <Text style={estilos.textoButtons}>Solicitar reserva</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.buttons, estilos.buttonCancel]} onPress={handleSubmitCancel}>
                <Text style={estilos.textoButtons}>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
} 

const estilos = StyleSheet.create({
    container : {
        margin: 30
    },

    inputs: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 5
    },

    label : {
        fontWeight: 'bold',
        color: '#444', 
        marginBottom: 8,
        marginTop: 30
    },

    buttons: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    buttonCancel: {
        backgroundColor: '#ccc',
        marginTop: 10
    },

    textoButtons: { 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})