# app-navigation
Curso de React-Native

## Estudo

* Instalação do React Navigation
* createNativeStackNavigator
* props.navigation.navigate()
* props.navigation.push()
* props.route.params
* Navegação Bottom Tabs
* Tab.Navigator & Tab.Screen
* (tabBarActive & tabBarInactive) -> Style

## Anotações

Nas funções você pode mudar o nome do parâmetro, Nos componentes de classe ele vem por padrão como props.
+Tomar cuidado com o this.+

**Expo Navigation**

`npm install @react-navigation/native`

`npx expo install react-native-screens react-native-safe-area-context`

`npm install @react-navigation/native-stack`

`npm install @react-navigation/bottom-tabs`

`npm install @react-navigation/drawer`

`npx expo install react-native-gesture-handler react-native-reanimated`

Em seu babel.config.js adicione o plugin reanimated:
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

Na primeira linha do seu index.js ou App.js coloque:

`import 'react-native-gesture-handler';`

## Sites

aqui vai ter os sites utilizados no módulo 3 e 6

https://chocolatey.org/install

https://developer.android.com/studio

https://react.dev/

https://expo.dev/

https://reactnavigation.org/
