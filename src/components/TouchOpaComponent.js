import { TouchableOpacity } from "react-native";
// Aplicação do Children no TouchableOpacity
export default function TouchOpaComponent({ children }) {
  return <TouchableOpacity>{children}</TouchableOpacity>;
}
