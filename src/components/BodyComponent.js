import { View, TouchableOpacity, Text, Image } from "react-native";
import { estilos } from "../styles/StylesHome";
//Chamando o componente Touch que criamos e colocamos o children
import TouchOpaComponent from "./TouchOpaComponent";

// Parte Body do Código
export default function BodyComponent() {
  clickPer = () => {
    alert("Sou um personagem")
  }
  return (
    <View style={estilos.secondaryContainer}>
      
      <TouchOpaComponent>
      <View style={estilos.containerbotoes}>
        <TouchableOpacity onPress={() => alert("Clicando atoa ai")}>
          <Text style={estilos.button}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Não funciona bobão")}>
          <Text style={estilos.button}>Sign In</Text>
        </TouchableOpacity>
        </View>

{/* Container de Imagens */}
        <View style={estilos.imagesContainer}>
          <TouchableOpacity onPress={() => alert("Paul Margoliss")}>
            <Image
              style={estilos.aki}
              source={require("../assets/images/aki.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Jean Dixon")}>
            <Image
              style={estilos.aki}
              source={require("../assets/images/jean.jpg")}
            />
          </TouchableOpacity>
        </View>


      </TouchOpaComponent>
    </View>
  );
}
