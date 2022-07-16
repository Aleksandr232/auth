import React,{useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AuthContext } from './components/authContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from './components/screens/Books';
import Setings from './components/screens/Setings';
import AuthForm from './components/AuthForm'; 
import Menu from './components/menu';

const Stack = createNativeStackNavigator();

  function Navigation(){
  (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Books">
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Setings" component={Setings} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}


  function App() {
 /*  const isAuth=false  */
  const[isAuth, setIsAuth]=useState()
  return (
    
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
       <View >  
      {!isAuth ? <AuthForm/> : <Menu />}
     </View> 
    </AuthContext.Provider>
  );
}



export default (Navigation, App)