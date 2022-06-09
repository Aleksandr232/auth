import React,{useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AuthContext } from './components/authContext';
import Main from './components/Main';
import AuthForm from './components/AuthForm'; 




export default function App() {
  /* const isAuth=false  */
  const[isAuth, setIsAuth]=useState()
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
       <View > 
      {!isAuth ? <AuthForm/> : <Main/> }
     </View> 
    </AuthContext.Provider>
  );
}



