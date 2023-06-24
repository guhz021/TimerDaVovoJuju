import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, TextInput } from 'react-native';

import * as animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native"

export default function Login() {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        
        <animatable.Image 
            animation='bounceInUp'
            source={require('../../assets/logo.png')}
            resizeMode="contain"
            style={styles.IMG}
        />

        <animatable.View animation="fadeInLeft" delay={500} style={styles.containerheader}>
            <Text style={styles.massage}>Faça seu login para começar</Text>
        </animatable.View>

        <animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.tittle}>EMAIL</Text>
        </animatable.View>

        <animatable.View animation="fadeInUp" style={styles.containerForm2}>
            <Text style={styles.tittle}>SENHA</Text>
        </animatable.View>

        <animatable.View animation="fadeInUp">
        <TouchableOpacity style={styles.button}
            onPress={ () => navigation.navigate('Home') }>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
       
            <TouchableOpacity style={styles.button2}
            onPress={ () => navigation.navigate('CriarConta') }>
                <Text style={styles.buttontext}>Criar conta</Text>
            </TouchableOpacity>
        </animatable.View>
            <animatable.View animation="fadeInUp" delay={500} style={styles.containerheader}>
            <Text style={styles.massage2}>Esqueci minha senha</Text>
        </animatable.View>
       
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FAFFF9"
    },
    IMG:{
        width: 30,
        height: 36,
        marginLeft: 173,
        marginTop: 28,

    },
    containerheader:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    massage:{
        fontSize: 34,
        marginTop:104,
        fontWeight: 'bold'
    },
    containerForm:{
        backgroundColor: '#FFFFFF',
        width: 327,
        height: 56,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft :24,
        marginTop: 32,
        paddingRight: 268,
        //borda colorida
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomColor: '#7E9F70',
        borderRightColor: '#7E9F70',
        borderTopColor: '#7E9F70',
        borderLeftColor: '#7E9F70'
    },
    containerForm2:{
        backgroundColor: '#FFFFFF',
        width: 327,
        height: 56,
        borderRadius: 10 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft :24,
        marginTop: 20,
        fontSize: 18,
        paddingRight: 268,
         //borda colorida
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomColor: '#7E9F70',
        borderRightColor: '#7E9F70',
        borderTopColor: '#7E9F70',
        borderLeftColor: '#7E9F70'
        
    },
    button:{
        backgroundColor: '#628754',
        color:'FFFFFF',
        width: 327,
        height: 53,
        borderRadius: 37,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft :24,
        marginTop: 32,
        fontSize: 20,
    },
    buttonText:{
        color:'#FFFFFF'
    },
    buttontext:{
        color:'#7E9F70'
    },
    button2:{
        backgroundColor: '#FFFFFF',
        width: 327,
        height: 53,
        borderRadius: 37,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft :24,
        marginTop: 32,
        fontSize: 20,
         //borda colorida
        borderBottomLeftRadius: 37,
        borderBottomRightRadius: 37,
        borderTopLeftRadius: 37,
        borderTopRightRadius: 37,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomColor: '#7E9F70',
        borderRightColor: '#7E9F70',
        borderTopColor: '#7E9F70',
        borderLeftColor: '#7E9F70'
    },
    massage2:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 34,
        fontSize: 16,
        textDecorationLine: 'underline',
    }
})