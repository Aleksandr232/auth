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
        <View style={styles.divi}/>
        <View style={styles.divi1}>
          <Image/><Text>eg</Text>
        </View>
        <View style={styles.divi2}>
          <Image/><Text>eg</Text>
        </View>
        <View style={styles.divi3}>
          <Image/><Text>eg</Text>
        </View>
        <View style={styles.divi4}>
          <Image/><Text>eg</Text>
        </View>
        <View style={styles.divi5}>
          <Image/><Text>eg</Text>
        </View>
        <View style={styles.divi6}>
          <Image/><Text>eg</Text>
        </View>

        
       
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
    divi:{
      width: '100%',
      height: 0,
      left: 0,
      bottom: 80,
      borderColor: 'rgba(56, 79, 125, 0.1)',
      borderBottomWidth: 3
    },
    divi1:{
      width: '100%',
      bottom: 50,
      borderColor: 'rgba(56, 79, 125, 0.1)',
      borderBottomWidth: 3
    },
    divi2:{
      width: '100%',
      bottom: 20,
      borderColor: 'rgba(56, 79, 125, 0.1)',
      borderBottomWidth: 3
    },
    divi3:{
      width: '100%',
      top: 10,
      borderColor: 'rgba(56, 79, 125, 0.1)',
      borderBottomWidth: 3
    },
    divi4:{
      width: '100%',
      top: 40,
      borderColor: 'rgba(56, 79, 125, 0.1)',
      borderBottomWidth: 3
    },
    divi5:{
      width: '100%',
      top: 70,
      borderColor: 'rgba(56, 79, 125, 0.1)',
      borderBottomWidth: 3
    },
    divi6:{
      width: '100%',
      top: 100,
      borderColor: 'rgba(56, 79, 125, 0.1)',
      borderBottomWidth: 3
    }
    
  })


export default Setings