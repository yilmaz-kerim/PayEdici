import { Stack } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const Layout = () =>{
    
    return(
        <Stack 
        screenOptions={{
            headerStyle:{
                backgroundColor: '#e7b532'
            },
            headerTintColor: "white",
            headerTitleStyle:{
                fontWeight: "bold"
            },
            headerRight: () =>(
                <TouchableOpacity onPress={()=>router.replace("/")}>
                    <Text>Home</Text>
                </TouchableOpacity>
            ),
            headerTitle: "PayEdici"
        }}/>
    )
}

export default Layout;