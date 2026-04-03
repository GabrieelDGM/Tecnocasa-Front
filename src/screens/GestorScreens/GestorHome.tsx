import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";

type NavProp = NativeStackNavigationProp<RootStackParamList, "GestorHome">;

export default function GestorHomeScreen() {

    const navigation = useNavigation<NavProp>();
    const route = useRoute();
       const { id, nombre, apellido, tipoGestor } = route.params as RootStackParamList["GestorHome"];

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                <Text style={styles.title}>Panel del Gestor</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>{nombre} {apellido}</Text>

                    <Text style={styles.label}>Tipo de gestor:</Text>
                    <Text style={styles.value}>{tipoGestor}</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("GestorCitas", { gestorId: id })}
                >
                    <Text style={styles.buttonText}>Ver citas</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    container: {
        flex: 1,
        paddingTop: 170,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#00A86B",
        marginBottom: 30
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        borderWidth: 2,
        borderColor: "#00A86B"
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    value: {
        fontSize: 18,
        marginBottom: 10
    },
    button: {
        backgroundColor: "#00A86B",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
});
