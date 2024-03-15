import { StatusBar } from 'expo-status-bar';

// Importação Navegação
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/pages/Home';
import Login from './src/pages/Login';
// Bem vindo a página, aqui foi feito o sistema de Stack, um template para uso feito por paulo, para o paulo usar.
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
