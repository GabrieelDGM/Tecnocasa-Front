import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>(); 

  return (
    <ImageBackground
      source={require("../../../assets/fondos/Bienvenidad.png")}
      style={styles.background}
    >
      <View style={styles.centerContent}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")} 
        >
          <Text style={styles.buttonText}>INICIAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 500,
  },
  button: {
    borderWidth: 10,
    borderColor: "#00A86B",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginTop: 150,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#00A86B",
    fontSize: 25,
    fontWeight: "bold",
  },
});
