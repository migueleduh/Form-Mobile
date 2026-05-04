import { TouchableOpacity, Text, StyleSheet } from "react-native";


type Props = {
    onPress: () => void;
    disabled?: boolean,
    isDark?: boolean;
}


export default function ButtonForm({onPress,disabled,isDark}:Props){

    return (
        <TouchableOpacity style={[styles.button, isDark ? {backgroundColor:"#961CFB"} : null]} onPress={onPress} disabled={disabled}>
            <Text style={styles.textButton}>Create Account</Text>
       </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    button:{
        backgroundColor:"#5C6DFF",
        paddingHorizontal:40,
        paddingVertical: 15,
        borderRadius:10,
        alignItems:"center",
        marginBottom: 20,
    },
    textButton:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    },
})