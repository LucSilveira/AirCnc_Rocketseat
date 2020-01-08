import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView,  Platform, AsyncStorage} from 'react-native'
import logo from '../assets/logo.png'
import api from '../services/api'


export default function Login({ navigation }){
    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Spots')
            }
        })
    }, [])

    async function handleSubmit() {
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data

        await AsyncStorage.setItem('user', _id)
        await AsyncStorage.setItem('techs', techs)

        navigation.navigate('Spots')
    }

    return (
        <KeyboardAvoidingView enabled={Platform.OS === 'android'} behavior='padding'
            style={estilos.containerPrincipal}>
            <Image source={logo}/>
            <View style={estilos.formulario}>
                <Text style={estilos.label}>Seu email!!</Text>
                <TextInput
                    style={estilos.inputs}
                    placeholder='Seu email'
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={estilos.label}>Tecnologias!!</Text>
                <TextInput
                    style={estilos.inputs}
                    placeholder='Tecnologias interessadas'
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity style={estilos.buttons} onPress={handleSubmit}>
                    <Text style={estilos.textoButtons}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const estilos = StyleSheet.create({
    containerPrincipal : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    formulario : {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
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
        marginBottom: 8
    },

    buttons: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    textoButtons: { 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})