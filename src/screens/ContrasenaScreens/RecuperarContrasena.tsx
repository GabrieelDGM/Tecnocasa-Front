import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RecuperarContrasena() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../../assets/fondos/FondoInicioDos.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Recuperar contraseña</Text>

        <Text style={styles.text}>
          Para recuperar su contraseña, por favor contacte con el siguiente correo:
        </Text>

        <Text style={styles.email}>soporte@tecnocasa.com</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00A86B",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: "#000",
  },
  email: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00A86B",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#00A86B",
    paddingVertical: 14,
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
