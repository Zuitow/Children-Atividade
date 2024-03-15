import { TouchableOpacity } from "react-native";

export default function TouchComponent({ children, clickPer }) {
 
   return (
    <TouchableOpacity onPress={clickPer}></TouchableOpacity>
   )

}