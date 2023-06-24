import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";


export default function BemVindo() {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.containerAbacates}
            onPress={ () => navigation.navigate('OverlayAbacate') }>
                <Image style={styles.IMG1}source={require('../../assets/logo.png')}></Image> 
            	<Text style={styles.contador}>5</Text>
            </TouchableOpacity> 
            
            <View style={styles.containerVovo}>
                <Image style={styles.IMG2}source={require('../../assets/Vovo_Juju.png')}></Image> 
            </View>


        <View style={styles.relogio}>
            <Text style={styles.textoRelogio}>45:00</Text>
        </View>

        <View style={styles.containerTimer}>
        <Image style={styles.IMG3}source={require('../../assets/play.png')}></Image> 
        </View>


    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FAFFF9"
    },
    containerAbacates:{
        backgroundColor:'#CDDECA',
        width:105,
        height:35,
        marginTop: 34.5,
        marginLeft: 25,
        borderRadius: 100,
    },
    IMG1:{
        width:32,
        height:38.4,
        marginLeft: 9,
        marginBottom: -1.6,
    },
    contador:{
        width:11,
        height:27,
        marginLeft: 64,
        marginTop: 5,
        position:'absolute',
        color:"#4E0F09",
        fontWeight:'bold',
        fontSize: 18,

    },    
    containerVovo:{
        backgroundColor:'#CDDECA',
        width:210,
        height:210,
        marginTop: 187.5,
        marginLeft: 82.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:100,
        
    },
    IMG2:{
        width:168,
        height:238,
        marginBottom : 35,   
    },
    relogio:{
        width:154,
        height:87,
        backgroundColor:"#FAFFF9",
        marginLeft :120,
        position:'absolute',
        marginTop: 500
       
    },
    textoRelogio:{
        width:154,
        height:87,
        justifyContent: 'center',
        fontSize: 58,
    },
    containerTimer:{
        backgroundColor:'#CDDECA',
        width:327,
        height:66,
        marginTop: 157,
        marginLeft: 24,
        borderRadius: 100,
    },
    IMG3:{
        height: 50,
        width: 50,
        marginLeft: 258,
        marginTop: 10
    }

})       

