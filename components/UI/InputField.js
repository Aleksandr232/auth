import React from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

 export const InputField = props=>{
 return<TextInput
    style={inputStyles.input}
    {...props}/>
 
}


const inputStyles = StyleSheet.create({
    input:{
        borderRadius:100,
        shadowColor:"#FFFF",
        shadowOffset:{width:0, height:3},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation:4,
        width: 315,
        height: 48,
        marginHorizontal: '11%',
        marginVertical: 25,
        paddingHorizontal:15,
        paddingVertical:15,
        fontSize:18,
        
        
    }
})