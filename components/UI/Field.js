import React from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

 export const Field = props=>{
 return<TextInput
    style={inputStyles.input}
    {...props}/>
 
}


const inputStyles = StyleSheet.create({
    input:{
        borderRadius:4,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:1,
        },
        shadowOpacity:0.22,
        shadowRadius: 2.22,
        elevation:3,
        width: '100%',
        marginHorizontal: '15%',
        marginVertical: 25,
        paddingHorizontal:15,
        paddingVertical:15,
        fontSize:18,
    }
})