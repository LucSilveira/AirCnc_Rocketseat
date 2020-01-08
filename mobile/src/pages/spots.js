import React, { useState, useEffect} from 'react'
import { SafeAreaView, ScrollView, Image, StyleSheet, AsyncStorage } from 'react-native'
import logo from '../assets/logo.png'
import SpotList from '../components/spotList'

export default function Spots(){
    const [techs, setTechs] = useState([])
 
    useEffect(() => {
        AsyncStorage.getItem('techs').then(storage => {
            const techsArray = storage.split(',').map(t => t.trim());

            setTechs(techsArray)
        })
    })


    return (
        <SafeAreaView style={estilos.containerPrincipal}>
            <Image source={logo} source={estilos.logo}/>
            <ScrollView>
                {
                    techs.map(tech => <SpotList key={tech} tech={tech}/>)
                }
            </ScrollView>
        </SafeAreaView>
    )
} 

const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
    },

    logo : {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})