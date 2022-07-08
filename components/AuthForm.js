import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { Field } from './UI/Field';
import { useAuth } from './useAuth';



const AuthForm=()=> {
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const [error, setError]=useState('')

  const {isAuth, setIsAuth}= useAuth('')

  const authHandler=async()=>{
    if(email && password){
        if(email !== 'row@232.ru'){
            return setError('не верная почта')
        }
        if(password !== '12345'){
            return setError('не верный пароль')
        }

        await AsyncStorage.setItem('row@232.ru', '12345')
        setIsAuth(true)
        
    }else{
        /* setError('Заполните все поля!') */
        
    }
  }
  return (
    <View style={{width:250, left:-30}}>
      <Image style={styles.img} source={require('./img/el.png')} /> 
      <Image style={styles.img2} source={require('./img/el2.png')} /> 
      <Text style={styles.text}>Sign In</Text>
        <Image style={styles.img3} source={require('./img/el3.png')} /> 
      <Field
      value={email}
      onChangeText={setEmail}
      placeholder='Почта'/>
      <Field
      value={password}
      onChangeText={setPassword}
      placeholder="Пароль..."/>
      <View style={{left:40}}>
      <Button  onPress={authHandler} title="Sign In"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex:1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center' */
  },
  text:{
    position: 'absolute',
    left: '20%',
    right: '-8%',
    top: '48%',
    bottom: '0%',
    fontFamily: 'Circular Std',
    fontSize: 32,
    lineHeight: 40,
    color: '#384F7D'
  },
  img2:{
    left: '135.8%',
    right: '9.07%',
    top: '13.79%',
    bottom: '69.46%'
  },
  img3:{
    left: '150.13%',
    right: '23.03%',
    top: '50.62%',
    bottom: '49.53%',
    
  },
});


export default AuthForm