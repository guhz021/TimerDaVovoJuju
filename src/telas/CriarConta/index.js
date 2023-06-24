import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

import * as animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native"

export default function Login() {
    const navigation = useNavigation();
    return (  
    <View style={styles.container}>


        <animatable.View>
        <TouchableOpacity style={styles.cancelar}
            onPress={ () => navigation.navigate('Login') }>
                <Text style={styles.buttonText2}>Cancelar</Text>
            </TouchableOpacity>
        </animatable.View>

        <animatable.View>    
            <animatable.Image
                animation='flipInY'
                source={require('../../assets/logo.png')}
                resizeMode="contain"
                style={styles.IMG}
            />
        </animatable.View>


        <animatable.View animation="fadeInLeft" delay={500} style={styles.containerheader}>
            <Text style={styles.massage}>Crie sua conta</Text>
        </animatable.View>

        <animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.tittle}>Nome de Usuário</Text>
        </animatable.View>

        <animatable.View animation="fadeInUp" style={styles.containerForm2}>
            <Text style={styles.tittle}>Email</Text>
        </animatable.View>

        <animatable.View animation="fadeInUp" style={styles.containerForm3}>
            <Text style={styles.tittle}>Senha</Text>
            <Image style={styles.IMG2}source={require('../../assets/olho.png')}></Image> 
        </animatable.View>

        <animatable.View animation="fadeInUp">
        <TouchableOpacity style={styles.button}
            onPress={ () => navigation.navigate('Home') }>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

        </animatable.View>
            <animatable.View animation="fadeInUp" delay={500} style={styles.containerheader}>
            <Text style={styles.massage2}>Já tenho uma conta</Text>
        </animatable.View>
       
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FAFFF9"
    },

    cancelar:{
        marginLeft: 20,
        marginTop: 34,
        width: 68,
        height: 18,
    },
    buttonText2:{
        color:'#000000',
    },
    IMG:{
        width: 30,
        height: 36,
        marginLeft: 173,
        marginTop: -28,

    },
    containerheader:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    massage:{
        fontSize: 34,
        fontWeight: 'bold',
        marginTop:104,
        paddingRight: 115
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
        paddingRight: 190,
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
        borderRadius: 10,
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
    containerForm3:{
        backgroundColor: '#FFFFFF',
        width: 327,
        height: 56,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft :24,
        marginTop: 20,
        fontSize: 18,
        paddingRight: 268,
        paddingTop: 5,
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
    IMG2:{
        width: 25.67,
        height: 23.36,
        marginRight: -550,
        marginTop: -16,
    },
    button:{
        backgroundColor: '#628754',
        color:'#FFFFFF',
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
    massage2:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 34,
        fontSize: 16,
        textDecorationLine: 'underline',
    }
})