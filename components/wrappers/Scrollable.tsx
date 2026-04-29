import { ScrollView,RefreshControl,StyleSheet, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

type Props = {
       padding?:number,
        gap?: number,
        onRefresh?:() => void,
        children:React.ReactNode
}


export default function Scrollable({ padding, gap, onRefresh, children }: Props){
    return( <SafeAreaView style={styles.Container}>
                <StatusBar/>
                <ScrollView contentContainerStyle={[styles.Container, padding ? {padding: padding} : null, gap ? {gap: gap} : null]}
                refreshControl={onRefresh ?  <RefreshControl refreshing={false} onRefresh={onRefresh}/> : undefined}>
                    {children}
                </ScrollView>
        
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
    }
})