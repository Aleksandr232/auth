import React from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

 export const Field = props=>{
 return<TextInput
    style={inputStyles.input}
    {...props}/>
 
}


const inputStyles = StyleSheet.create({
    input:{
        borderRadius:8,
        shadowColor:"#DDEBDC",
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:1.22,
        shadowRadius: 3.22,
        elevation:3,
        width: 315,
        height: 48,
        marginHorizontal: '15%',
        marginVertical: 25,
        paddingHorizontal:15,
        paddingVertical:15,
        fontSize:18,
        
    }
})