import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<NavProp>(); 

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../../../assets/FondoInicioDos.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        {/* 🔽 Inputs más abajo */}
        <View style={{ marginTop: 80, width: "100%" }}>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor="#666"
            value={usuario}
            onChangeText={setUsuario}
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.linksRow}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.linkText}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.linkText}>¿Olvidó Contraseña?</Text>
          </TouchableOpacity>
        </View>

        {/* Botón principal */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* 🔥 NUEVO BOTÓN VERDE: ENTRAR SIN CUENTA */}
        <TouchableOpacity
          style={[styles.button, { marginTop: 15 }]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Entrar sin cuenta</Text>
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
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 150,
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: "#00A86B",
    borderWidth: 4,
  },
  linksRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    marginTop: 10,
  },
  linkText: {
    color: "#00A86B",
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    width: "100%",
    backgroundColor: "#00A86B",
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
