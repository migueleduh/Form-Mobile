import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

type Props = {
    placeholder: string,
    label:string,
    children?: React.ReactNode,
    error?: string,
    onChangeText: (value:string) => void; 
    isNumber?:boolean;
    isDark: boolean;
}   


export default function InputForm({isDark,placeholder, label, children,error,onChangeText,isNumber}:Props){
    return(
        <View >
            <Text style={isDark ? {color:"white"} : null}>{label}</Text>
            <View style={[styles.inputContainer, isDark ? {backgroundColor:"#1E2939"} : null]} >
                {children} 
            <TextInput  style={[styles.input, isDark ? {color:"gray", backgroundColor:"#1E2939"} : null]} placeholder={placeholder}  placeholderTextColor={"gray"} onChangeText={onChangeText} keyboardType={isNumber ? "numeric" : undefined}/>
            </View>
            
            {error ?  <Text style={styles.messageError}> {error} </Text> : null}
        </View>
    )
}
//#0E1625

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:10,
        alignItems:"center",
        paddingHorizontal:10,
        width:"100%",
        color:"white"

    },
    input:{
        padding:10,
        width:"90%",
        height:50,
    },
    messageError:{
        color:"red",
        fontSize:12,
        marginTop:5,
    }
})