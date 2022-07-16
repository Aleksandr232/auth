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
        <TouchableOpacity>
          <View style={styles.divi1}>
            <Image style={{bottom:4, left:10}} source={require('../img/accunt.png')}/><Text style={{left:40, bottom:25, fontSize:16, color:'rgba(68, 89, 132, 0.8)'}}>Аккаунт</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.divi2}>
            <Image style={{bottom:4, left:10}} source={require('../img/noti.png')}/><Text style={{left:40, bottom:25, fontSize:16, color:'rgba(68, 89, 132, 0.8)'}}>Уведомления</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.divi3}>
            <Image style={{bottom:4, left:10}} source={require('../img/privace.png')}/><Text style={{left:40, bottom:25, fontSize:16, color:'rgba(68, 89, 132, 0.8)'}}>Конфиденциальность</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.divi4}>
            <Image style={{bottom:4, left:10}} source={require('../img/help.png')}/><Text style={{left:40, bottom:25, fontSize:16, color:'rgba(68, 89, 132, 0.8)'}}>Центер поддержки</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.divi5}>
            <Image style={{bottom:4, left:10}} source={require('../img/general.png')}/><Text style={{left:40, bottom:25, fontSize:16, color:'rgba(68, 89, 132, 0.8)'}}>О приложении</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={authHandler}>
          <View style={styles.divi6}>
            <Text style={{left:40, bottom:20, fontSize:16, color:'#D45E5E'}}>ВЫЙТИ</Text>
          </View>
        </TouchableOpacity>

        
       
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
      top: 110,
      borderColor: 'rgba(56, 79, 125, 0.1)',
      borderBottomWidth: 3
    }
    
  })


export default Setings