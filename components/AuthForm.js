import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Field } from './UI/Field';
import { useAuth } from './useAuth';



export default function AuthForm() {
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const [error, setError]=useState('')

  const {isAuth, setIsAuth}= useAuth()

  const authHandler=async()=>{
    if(email && password){
        if(email === 'row@232.ru'){
            return setError('не верная почта')
        }
        if(password === '12345'){
            return setError('не верный пароль')
        }

        await AsyncStorage.setItem('token', 'ffdfgd')
        setIsAuth(true)
    }else{
        /* setError('Заполните все поля!') */
        
    }
  }
  return (
    <View style={{width:250, left:-30}}>

      <Field
      value={email}
      onChangeText={setEmail}
      placeholder="Почта..."/>
      <Field
      value={password}
      onChangeText={setPassword}
      placeholder="Пароль..."/>
      <View style={{left:40}}>
      <Button  onPress={authHandler} title="Войти"/>
      </View>
    </View>
  );
}

