import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default (props) => (
    <Tab.Navigator screenOptions={
        ({route}) => ({
            tabBarIcon:  ({focused, size, color}) => {
                let iconName;
                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline'
                        break;
                    case 'TelaB':
                        iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline'
                        break;
                    case 'TelaC':
                        iconName = focused
                        ? 'ios-list-outline'
                        : 'ios-list'
                        break;
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#999',
            tabBarActiveBackgroundColor: '#EEE',
            tabBarInactiveTintColor: '#00F',
            tabBarInactiveBackgroundColor: '#FFF',
            tabBarShowLabel: true,
            tabBarLabelStyle: { fontSize: 15 }
        })
    } initialRouteName='TelaB'>
        <Tab.Screen name='TelaA' component={TelaA} options={{title: 'Sobre'}} />
        <Tab.Screen name='TelaB' component={TelaB} options={{title: 'Inicial'}} />
        <Tab.Screen name='TelaC' component={TelaC} options={{title: 'Opções'}} />
    </Tab.Navigator>
)