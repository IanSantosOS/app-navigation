import { View, Button } from "react-native";
import TextoCentral from "../components/TextoCentral";

export default (props) => {
    return (
        <View style={{ flexGrow: 1 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                <Button
                    title='Abrir'
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                        }, 3000)
                    }}
                />
            </View>
            <View style={{ flexGrow: 1 }}>
                <TextoCentral corFundo="#33fa72" corTexto="#000">
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}