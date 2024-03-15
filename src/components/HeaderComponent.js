import { Text, View, StyleSheet } from "react-native";
import { estilos } from "../styles/StylesHome";


export default function HeaderComponent() {
  return (
    <View
      style={estilos.header}>
      <Text style={estilos.fonteHeader}>Bem-vindo Página de Paulo</Text>
    </View>
  );
}