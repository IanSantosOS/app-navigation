import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import Stack from "./Stack";

export default (props) => (
    <SafeAreaView style={{flexGrow:1}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
)