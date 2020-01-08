import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from  'react-navigation'
import api from '../services/api'

function SpotList({ tech, navigation }){
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpot(){
            const response = await api.get('/spots', {
                params : { tech }
            })
            setSpots(response.data)
        }

        loadSpot()
    }, [])

    function handleSubmit(id){
        navigation.navigate('Book', { id })
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo} >que usam <Text style={estilos.bold}>{tech}</Text></Text>
            <FlatList
                style={estilos.lista}
                data={spots}
                keyExtractor={spot => spot._id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={estilos.itemLista}>
                        <Image style={estilos.img} source={{ uri: item.thumbnail_url}}/>
                        <Text style={estilos.empresa}>{item.company}</Text>
                        <Text style={estilos.preco}>{item.price ? `R$${item.price}/dia` : `Gratuito`}</Text>
                        <TouchableOpacity onPress={() => handleSubmit(item._id)} style={estilos.botao}>
                            <Text style={estilos.textoButton}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container : {
        marginTop: 30
    },

    titulo : {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },

    bold : {
        fontWeight: 'bold'
    },

    lista : {
        paddingHorizontal: 20
    },

    itemLista : {
        marginRight: 15
    },

    img : {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 5
    },

    empresa : {
        fontSize: 24,
        fontWeight : 'bold',
        color : '#333',
        marginTop: 10,
    },

    preco : {
        fontSize: 15,
        color: '#999',
        marginTop: 5
    },

    botao : {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 15
    },

    textoButton: { 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})


export default withNavigation(SpotList)