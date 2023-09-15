import { View, Button } from "react-native";

export default (props) => (
    <View style={{flexGrow: 1}}>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            {props.voltar
                ? <Button title="Voltar"
                    onPress={() => props.navigation.goBack()}
                />
                : false
            }
            {props.avancar
                ? <Button title="Avançar"
                    onPress={() => props.navigation.push(
                        props.avancar,
                        props.avancarParams
                        )}
                />
                : false
            }
        </View>
        <View style={{flexGrow: 1}}>
            {props.children}
        </View>
    </View>
)