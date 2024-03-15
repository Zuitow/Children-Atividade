import { View, TouchableOpacity, Text, Image } from "react-native";
import { estilos } from "../styles/StylesHome";
import TouchOpaComponent from "./TouchOpaComponent";
pressButton = () => {
  alert("Eu não funciono *carinha triste*");
};

mensagem = () => {
  alert("Miau");
};

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
