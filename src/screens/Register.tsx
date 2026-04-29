import {View, Text, StyleSheet} from "react-native";
import { use, useEffect, useState } from "react";
import linearGradient, { LinearGradient } from "expo-linear-gradient";



export default function Register(){

    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setTimeout(() => {
            setLoading(!loading);
        }, 2000);
    } , [])

    if(loading){
        return <LinearGradient colors={["#5C6DFF","#961CFB"]} style={styles.loading}>

                    <Text style={styles.textLoading}>Sistema Carregando...</Text>
               </LinearGradient>
    }


   return( <View >
               <LinearGradient colors={["#5C6DFF","#961CFB"]} start={{x: 0, y:0}} end={{x:1, y:1}} style={styles.header}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Join us today and get started</Text>
               </LinearGradient>
                
          </View>
   )
}


const styles = StyleSheet.create({
    header: {
        padding:30,
        gap:10,
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"white"
    },
    subtitle:{
        color:"white"
    },
    loading:{
        flex:1,
        backgroundColor:"#6865FF",
        alignItems:"center",
        justifyContent:"center",
    },
    textLoading:{
        color:"white",
        fontSize:20
    }
})