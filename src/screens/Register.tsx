import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity,Switch } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import InputForm from "../../components/form/inputForm";
import Scrollable from "@/components/wrappers/Scrollable";
import ButtonForm from "@/components/form/ButtonForm";

export default function Register(){

    const [loading, setLoading] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConsfirmPass] = useState('');


    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [errorPassword, setErrorPass] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");

    const [disabled, setDisabled] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    const [isEnabled, setIsEnabled] = useState(false);




    useEffect( () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    } , []);



    const handleEnviar = ():void => {
      
        if(password !== "" && password !== confirmPass){
            setErrorConfirm("Senhas não coicidem") ; 
            setErrorPass("Senhas não coicidem");
        }
        else{
            setErrorConfirm("");
            setErrorPass("");

            console.log("UserName: " + name + "\n" +
                        "Email: " + email + "\n" + 
                        "Phone: " + phone + "\n" +
                        "Password: " + password + "\n" +
                        "PassConfirm: " + confirmPass + "\n" +
                        "Notifications: " +  isEnabled + "\n" );
        }
        

    }

    useEffect(() => {
        if(!name || !email || !phone || !password || !confirmPass){
            setDisabled(true);
        }
        else{
            setDisabled(false);
        }

    }, [name,email,phone,password,confirmPass]);

    useEffect(() => {
        setDarkMode(false);
    },[])
    
   //const darkColor = #0E1625, #301B59;


    if(loading){
        return <LinearGradient   colors={["#5C6DFF","#961CFB"]}  style={styles.loading}>
                    <Image source={require("../../assets/images/branco.png")} style={{width:250, height:250}}/>
                    <Text style={styles.textLoading}>Sistema Carregando...</Text>
               </LinearGradient>
    }


   return( <Scrollable>
               <LinearGradient colors={darkMode ? ["#0E1625","#2C1F59"] : ["#5C6DFF","#961CFB"]} start={{x: 0, y:0}} end={{x:1, y:1}} style={styles.header}>
                    <Ionicons name={"person-outline"} size={30} color="white" style={styles.icon}/>

                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Join us today and get started</Text>

                    <TouchableOpacity style={[styles.buttonMode, darkMode ? {backgroundColor:"#1E2939"}: null]} onPress={() => setDarkMode(!darkMode)}  > 
                        <Ionicons style={styles.iconMode} name={ darkMode ? "sunny" : "moon"} size={25} color={ darkMode ? "yellow" : "white"} />
                        </TouchableOpacity>
               </LinearGradient>

                <View  style={[styles.inputContainer, darkMode ? styles.containerDark : null]}>

                     <InputForm label="Full name" placeholder="Enter your Name" onChangeText={setName} error={errorName} isDark={darkMode}>
                         <Ionicons name="person-outline" size={25} color="#ccc"/>
                     </InputForm>

                     <InputForm label="Email" placeholder="Enter your email" onChangeText={setEmail} error={errorEmail} isDark={darkMode}>
                         <Ionicons name="mail-outline" size={25} color="#ccc"/>
                     </InputForm>

                     <InputForm label="Phone" placeholder="Enter your phone number" onChangeText={setPhone} error={errorPhone} isNumber={true} isDark={darkMode}>
                         <Ionicons name="call-outline" size={25} color="#ccc"/>
                     </InputForm>   

                    <InputForm label="Password" placeholder="Enter your password" onChangeText={setPassword} error={errorPassword} isDark={darkMode}>
                        <Ionicons name="lock-closed-outline" size={25} color="#ccc"/>           
                    </InputForm>

                     <InputForm label="Confirm Password" placeholder="Enter your password" onChangeText={setConsfirmPass} error={errorConfirm}  isDark={darkMode} >
                        <Ionicons name="lock-closed-outline" size={25} color="#ccc"/>           
                    </InputForm>

                    <View style={styles.switch}>
                         <Text style={darkMode ? {color: "white"} : null}> Enable Email Notifications:</Text> 
                         <Switch value={isEnabled} onValueChange={ () =>  { setIsEnabled(!isEnabled)}} /> 
                    </View>

                        <ButtonForm onPress={handleEnviar} disabled={disabled} isDark={darkMode}/>
                    </View>

                <View style={[{alignItems:"center", paddingBottom:15}, darkMode ? styles.containerDark : null]}>
                    <Text style={darkMode ? {color:"white"} : null}>Already have an account? <Text style={styles.textLink}>Sign In</Text></Text>
                </View>
          </Scrollable>
          
   )
}

const styles = StyleSheet.create({
    header: {
        padding:20,
        gap:15,
    },
    title:{
        fontSize:26,
        fontWeight:"bold",
        color:"white",
        fontFamily:"Helvetica"
    },
    subtitle:{
        color:"white",
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
    },
    icon:{
        borderStyle:"solid",
        borderRadius:10,
        padding:15,
        alignSelf:"flex-start",
        backgroundColor: 'rgba(228, 210, 210, 0.20)'
    
    },
    inputContainer:{
        paddingTop:30,
        gap:20,
        alignItems:"center",
        paddingHorizontal:20,
    },
    textLink:{
        color:"#961CFB",
        fontWeight:"bold",
        fontSize:15,
    },
    buttonMode:{
        backgroundColor:"rgba(228, 210, 210, 0.50)",
        borderRadius:50,
        alignSelf:"flex-start",
        position:"absolute",
        right:25,
        top: 25
    },
    iconMode:{
        alignSelf:"center",
        padding:10
    },
    containerDark:{
        backgroundColor:"#0E1625",
    },
    switch:{
        alignItems:"center",
        flexDirection:"row"
    }

})

