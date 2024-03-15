import { View, TouchableOpacity, Text, Image } from "react-native";
import { estilos } from "../styles/StylesHome";
//Chamando o componente Touch que criamos e colocamos o children
import TouchOpaComponent from "./TouchOpaComponent";

// Parte Body do Código
export default function BodyComponent() {
  return (
    <View style={estilos.secondaryContainer}>
     <TouchOpaComponent>
      
      <TouchableOpacity onPress={() => alert("Home")}>
        <Text style={estilos.button}>Log In</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={() => alert("Login")}>
        <Text style={estilos.button}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={estilos.aki} source={require('../assets/images/aki.jpg')}/>
      </TouchableOpacity>
      </TouchOpaComponent>
    </View>
  );
}
