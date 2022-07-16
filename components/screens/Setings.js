import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image} from 'react-native';
import { useAuth } from '../useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Setings=()=>{
  const {isAuth, setIsAuth}= useAuth('')
  const authHandler=()=>{
         AsyncStorage.removeItem('token')
         setIsAuth(false)
      }
  
  


    return(
        <View style={styles.container}>
        <ImageBackground source={require('../img/el4.png')}  style={styles.img} >
           <Text style={styles.text}>Настройки</Text>
              <View style={{flex:1, top:140, left:50}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                      <Image source={require('../img/strel.png')}/>
                  </TouchableOpacity>
              </View>
        </ImageBackground>
        
       <Button title='выйти' onPress={()=>authHandler(false)}></Button>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
      backgroundColor:'rgba(255, 255, 255, 0.61)',
      height:"100%"
    },
    img:{
      width:'100%',
      height:246.15,
      top:-93,
    },
    text:{
      width: 130,
      height: 24,
      left: '40%',
      top: 160,
      color:'#FFFF',
      fontSize:19,
      fontWeight:'700'
    },
    
  })


export default Setings