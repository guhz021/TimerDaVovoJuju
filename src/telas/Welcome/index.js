import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native"
    

export default function BemVindo() {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        
        <View style={styles.containerLogo}>

            <animatable.Image
            animation='flipInY'
                source={require('../../assets/logo.png')}
                style={{ width:'100%'}}
                resizeMode="contain"
            />
        </View>

        <animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

            <TouchableOpacity style={styles.button}
            onPress={ () => navigation.navigate('Login') }>
                <Text style={styles.buttontext}>Acessar</Text>
            </TouchableOpacity>

        </animatable.View>

    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FAFFF9"
    },
    containerLogo:{
        flex:4,
        backgroundColor:"##FAFFF9",
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:"##FAFFF9",
    },
    button:{
        position:'absolute',
        backgroundColor:"##FAFFF9",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontext:{
        fontSize: 18,
        fontWeight: 'bold'
    }

})