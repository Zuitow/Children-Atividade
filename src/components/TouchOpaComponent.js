import { TouchableOpacity } from "react-native";
// Aplicação do Children no TouchableOpacity
export default function TouchOpaComponent({ children, clickBtn }) {
  return <TouchableOpacity onPress={clickBtn} >{children}</TouchableOpacity>;
}
