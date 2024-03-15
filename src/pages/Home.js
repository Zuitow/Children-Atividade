import { View } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import BodyComponent from "../components/BodyComponent";
import FooterComponent from "../components/FooterComponent";



// Página do meu código
export default function Home() {
    return (
        <View>
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
    </View>
    )
}
