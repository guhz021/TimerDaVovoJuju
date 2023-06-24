import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native';
import * as animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native"
    

export default function BemVindo() {
    const navigation = useNavigation();
    return (
    <animatable.View style={styles.container} animation='bounceInUp' delay={50}>
        
        <TouchableOpacity style={styles.fechar}
            onPress={ () => navigation.navigate('Home') }>
            <Image style={styles.IMGfechar}source={require('../../assets/fechar.png')}></Image> 
        </TouchableOpacity>

        <View>
            <Text style={styles.texto1}> Para que servem os Abacates?</Text>
        </View>


        <TouchableOpacity style={styles.fechar}
            onPress={ () => navigation.navigate('OverlayAbacate2') }>
            <Text>aqui</Text>
        </TouchableOpacity>


        <View>
            <Text style={styles.texto2}>Além de fazer bem e deixar o cabelo{'\n'} bonito,{'\n'}
                os abacates servem como moedas, ou{'\n'} seja, 
                a cada timer completo você{'\n'} ganha um, porém 
                se nao terminar vai{'\n'} perder abacate bem. </Text>
        </View>
        
        <View style={styles.vovo}>
            <Image style={styles.IMGvovo}source={require('../../assets/VovoComAbacate1.png')}></Image> 
        </View>


    </animatable.View >
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#DEFBD9"
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
    IMGvovo:{
        width: '100%',
        height: 228,
        marginTop: 130
        
    }

})