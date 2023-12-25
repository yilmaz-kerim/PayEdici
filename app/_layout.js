import { Stack, StackScreen } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#e7b532',
                    height: 60, // Adjust the height as needed
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
                headerRight: () => (
                    <TouchableOpacity onPress={() => router.replace("/")}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                ),
                headerTitle: "PayEdici"
            }}
        >
            {/* Example screen */}
            <StackScreen name="Home" component={HomeScreen} />
            {/* Add other screens here */}
        </Stack>
    );
};

export default Layout;

// Placeholder HomeScreen component
const HomeScreen = () => {
    return <View><Text>Home Screen</Text></View>;
};
