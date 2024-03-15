import { StyleSheet } from "react-native";

// Componente de Estilização total do código

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  inputName: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    fontSize: 20,
    margin: 5,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  img2: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  header: {
    backgroundColor: "gray",
    width: "100%",
    height: 110,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  fonteHeader: {
    fontSize: 25,
  },
  button: {
    fontSize: 20, // Tamanho da fonte
    color: 'black', // Cor do texto
    backgroundColor: 'gray', // Cor de fundo do botão
    width: 150, // Largura
    height: 50, // Altura
    marginTop: 5, // Margem superior
    borderRadius: 5, // Bordas arredondadas
    textAlign: 'center', // Alinhamento do texto
    justifyContent: 'center', // Alinhamento vertical (dentro do Flex Container)
    alignItems: 'center', // Alinhamento horizontal (dentro do Flex Container)
    display: 'flex', // Tipo de exibição
    borderWidth: 1, // Largura da borda
  },
  aki: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
});