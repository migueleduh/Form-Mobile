import {View,Text,Image, StyleSheet} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Register from "../screens/Register";
import { useEffect,useState } from "react";

export default function App() {

     const [loading, setLoading] = useState(true);

      useEffect( () => {
           const timer =  setTimeout(() => {
                setLoading(false);
            }, 2000);

            return () => {
                clearTimeout(timer);
            }
        } , []);
    
        
    
        if(loading){
            return <LinearGradient colors={["#5C6DFF","#961CFB"]} style={styles.loading}>
                        <Image source={require("../../assets/images/branco.png")} style={{width:250, height:250}}/>
                        <Text style={styles.textLoading}>Sistema Carregando...</Text>
                   </LinearGradient>
        }

    return(
            <Register>
            </Register>
    )
}


const styles = StyleSheet.create({
     loading:{
        flex:1,
        backgroundColor:"#6865FF",
        alignItems:"center",
        justifyContent:"center",
    },
    textLoading:{
        color:"white",
        fontSize:20
    },
})

