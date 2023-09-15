import { View, Button } from "react-native";

export default (props) => (
    <View style={{flexGrow: 1}}>
        <View>
            {props.voltar
                ? <Button title="Voltar"
                    onPress={() => props.navigation.goBack()}
                />
                : false
            }
            {props.avancar
                ? <Button title="Avançar"
                    onPress={() => props.navigation.navigate(props.avancar)}
                />
                : false
            }
        </View>
        <View style={{flexGrow: 1}}>
            {props.children}
        </View>
    </View>
)