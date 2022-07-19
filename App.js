import React,{useState} from 'react';
import { StyleSheet,  View, Image } from 'react-native';
import { AuthContext } from './components/authContext';
import AuthForm from './components/AuthForm'; 
import Menu from './components/menu';






  function App() {
 /*  const isAuth=false  */
  const[isAuth, setIsAuth]=useState()
  return (
    
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
       <View >  
      {!isAuth ? <AuthForm/> : <Menu /> }
     </View> 
    </AuthContext.Provider>
  );
}



export default  App;