import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export default (props) => (
    <Stack.Navigator
        initialRouteName='TelaA' //Define a Tela inicial através do name
        screenOptions={{ headerShown: true }} //Define a visualização da parte de cima da navegação através de um valor booleano
    >
        <Stack.Screen
            name="TelaA" //Define o nome da tela através do name
            // component={TelaA} //Define o componente principal a ser utilizado nessa tela
            options={{ title: 'Informações Iniciais' }} //Título aparente para o usuário
        >
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack {...props} voltar avancar="TelaC" avancarParams={{numero:1007}}>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack {...props} voltar avancar="TelaC">
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)