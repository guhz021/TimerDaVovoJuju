import React, { useState, useRef, Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as animatable from 'react-native-animatable';
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import {gestureHandlerRootHOC} from 'react-native-gesture-handler'

 function BemVindo() {
    const navigation = useNavigation();

    //timer
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [customInterval, setCustomInterval] = useState();
    
    const startTimer=() =>{
        setCustomInterval(
        setInterval(() =>{
            changeTime();
        },1000)
        )
    }

    const stopTimer = () =>{
        if(customInterval){
            clearInterval(customInterval);
        }
    };
    const clear = () =>{
        stopTimer();
        setSeconds(0);
        setMinutes(0);
    };
    const changeTime = () =>{
        setSeconds((prevState)=>{
            if(prevState +1 == 60){
                setMinutes(minutes +1);
                return 0;
            }
            return prevState +1
        })
    };

    //BottomSheet
    const bottomSheetRef = useRef(null);

    return (
    <animatable.View animation="fadeInUp" style={styles.container}>
        
        <TouchableOpacity style={styles.containerAbacates}
            onPress={ () => navigation.navigate('OverlayAbacate') }>
                <Image style={styles.IMG1}source={require('../../assets/logo.png')}></Image> 
            	<Text style={styles.contador}>5</Text>
            </TouchableOpacity> 
            
            
            <animatable.View animation="fadeInLeft" delay={200} style={styles.containerVovo}>
                <TouchableOpacity onPress={() =>{
                    bottomSheetRef.current?.expand()
                }}>
                <Image style={styles.IMG2}source={require('../../assets/MCjuju.png')}></Image> 
                </TouchableOpacity>
            </animatable.View>


        <animatable.View animation="fadeInLeft" delay={350} style={styles.relogio}>
            <Text style={styles.textoRelogio}>
            {minutes <10 ? "0" + minutes :minutes}:
            {seconds <10 ? "0" + seconds :seconds}
            </Text>
        </animatable.View>

        <animatable.View animation="fadeInLeft" delay={400}  style={styles.containerTimer}>
            <TouchableOpacity onPress={startTimer}>
            <Image style={styles.IMG3}source={require('../../assets/play.png')}></Image>
            </TouchableOpacity> 


            <TouchableOpacity style={styles.button}
            onPress={ () => navigation.navigate('OverlayAbacate2') }>
                <Image style={styles.IMG4}source={require('../../assets/stop.png')}></Image>
            </TouchableOpacity>
        </animatable.View>

            <TouchableOpacity onPress={stopTimer} style={styles.stopbutton2}>
                <Text style={styles.buttons}>stop</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={clear} style={styles.stopbutton}>
                <Text style={styles.buttons}>clear</Text>
            </TouchableOpacity> 
        
        <BottomSheet ref={bottomSheetRef} index={1} snapPoints={[1,'48%']}
         backgroundStyle={{backgroundColor:'#B4908C',borderRadius:50}} 
         handleIndicatorStyle={{backgroundColor:"#5A312C",width:118,height:8,marginTop:14}}>
            <View style={styles.BottomSheet1}>

                <View style={styles.vovo1}>
                <TouchableOpacity onPress={ () => navigation.navigate('Home') }>
                <Image style={styles.IMGvovo1} source={require('../../assets/vovo1.png')}></Image>
                </TouchableOpacity>
                </View>

                <View style={styles.vovo2}>
                <Image style={styles.IMGvovo2} source={require('../../assets/vovo2.png')}></Image>
                </View>

                <View style={styles.vovo3}>
                <TouchableOpacity onPress={ () => navigation.navigate('Home3') }>
                <Image style={styles.IMGvovo3} source={require('../../assets/vovo3.png')}></Image>
                </TouchableOpacity>
                </View>


            </View>

        </BottomSheet>

    </animatable.View>
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
        backgroundColor:'#DEC3B4',
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
        marginLeft: 20
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
        color:'#1B3810'
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
        marginTop: 10,
    
    },
    IMG4:{
        height: 50,
        width: 50,
        marginRight: 258,
        marginLeft: 15,
        marginTop: -50,
  
    },
    stopbutton2:{
        height: 55,
        width: 55,
        marginLeft: 120,
        marginTop: -60,
        backgroundColor: '#628754',
        borderRadius: 20,
        alignItems:'center',
        justifyContent: 'center',
        color:'#FFFFFF',
    },
    stopbutton:{
        height: 55,
        width: 55,
        marginLeft: 200,
        marginTop: -55,
        backgroundColor: '#628754',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color:'#FFFFFF',
        fontWeight: 'bold'
    },
    buttons:{
        color:'#FFFFFF',
    },
    BottomSheet:{
        flexDirection:'row',
        backgroundColor: '#B4908C',
    },
    IMGvovo1:{
        height: 170,
        width: 100,
        marginLeft: 24,
        borderRadius: 10,
        position: 'absolute'

    },
    IMGvovo2:{
        height: 170,
        width: 100,
        marginLeft: 148,
        borderRadius: 10,
        position: 'absolute'
    },
    IMGvovo3:{
        height: 170,
        width: 100,
        marginLeft: 270,
        borderRadius: 10,
        position: 'absolute'
    }
    
    
})     
  
//tem que exportar pros gestos funcionar
export default gestureHandlerRootHOC(BemVindo);