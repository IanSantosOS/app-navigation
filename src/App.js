import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';

// import TextoCentral from './components/TextoCentral';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

export default function App(props) {
    return (
        <SafeAreaView style={{flexGrow:1}}>
            {/* <TextoCentral>Opa!</TextoCentral> */}
            <TelaA />
            <TelaB />
            <TelaC />
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}