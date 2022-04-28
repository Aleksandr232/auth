import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './components/authContext';
import Main from './components/Main';
import AuthForm from './components/AuthForm';




export default function App() {
  const[isAuth, setIsAuth]=useState(false)
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <View style={styles.container}>
      <Text>Авторизация</Text>

      {!isAuth ? <AuthForm/> : <Main styles={styles}/>}
    </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
