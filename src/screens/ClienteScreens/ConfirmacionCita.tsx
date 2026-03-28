import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ConfirmScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <ImageBackground
      source={require("../../../assets/FondoClienteUno.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        {/* Imagen de confirmación */}
        <Image
          source={require("../../../assets/citaconfirmacion.png")}
          style={styles.confirmImage}
          resizeMode="contain"
        />

        {/* Mensaje */}
        <Text style={styles.message}>
          Pronto un agente se pondrá en contacto con usted
        </Text>

        {/* Botón */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ClientHome")}
        >
          <Text style={styles.buttonText}>Volver al inicio</Text>
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
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 180, 
  },
  confirmImage: {
    width: "85%",
    height: 250,
    marginBottom: 30,
  },
  message: {
    fontSize: 18,
    color: "#050505",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#00A86B",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "70%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
