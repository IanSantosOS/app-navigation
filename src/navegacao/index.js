import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

// import Drawer from "./Drawer";
import Tab from "./Tab";
// import Stack from "./Stack";

export default (props) => (
    <SafeAreaView style={{flexGrow:1}}>
        <NavigationContainer>
            {/* <Drawer /> */}
            <Tab />
            {/* <Stack /> */}
        </NavigationContainer>
    </SafeAreaView>
)