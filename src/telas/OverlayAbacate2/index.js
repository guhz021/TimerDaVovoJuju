import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native';
import * as animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native"
    

export default function BemVindo() {
    const navigation = useNavigation();
    return (
    <animatable.View style={styles.container} animation='bounceInUp'>
        
        <TouchableOpacity style={styles.fechar}
            onPress={ () => navigation.navigate('Home') }>
            <Image style={styles.IMGfechar}source={require('../../assets/fechar.png')}></Image> 
        </TouchableOpacity>

        <View>
            <Text style={styles.texto1}>Tem certeza que vai desistir bem?</Text>
        </View>

        <View>
            <Text style={styles.texto2}>Cuidado, se desistir vai perder um{'\n'} 
            abacate.{'\n'} 
            Como assim não gosta de abacate? </Text>
        </View>

        <TouchableOpacity style={styles.desistir}
            onPress={ () => navigation.navigate('Home') }>
            <Text style={styles.desistirText}>Desistir</Text> 
        </TouchableOpacity>

        <View style={styles.vovo}>
            <Image style={styles.IMGvovo}source={require('../../assets/VovoComAbacate2.png')}></Image> 
        </View>


    </animatable.View >
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E7FEE3"
    },

    IMGfechar:{
        width: 34,
        height: 34,
        marginLeft: 317,
        marginTop: 24
   
    },

    texto1:{
        fontSize: 34,
        marginTop:104,
        fontWeight: 'bold',
        marginLeft:26
    },

    texto2:{
        fontSize: 18,
        marginTop:48,
        marginLeft:26,
        lineHeight: 27
    },
    desistir:{
        backgroundColor:'#E64848',
        width:142,
        height:47,
        marginLeft: 116,
        marginTop: 48,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    desistirText:{
        color:'#FAFFF9',
        fontSize: 20,
        fontWeight: 'bold'

    },
    IMGvovo:{
        width: '100%',
        height: 228,
        marginTop: 110
        
    }

})