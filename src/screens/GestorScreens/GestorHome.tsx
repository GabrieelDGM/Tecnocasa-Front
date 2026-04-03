import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
export default function GestorHomeScreen() {

    // Visual
    const gestor = {
        nombre: "Manuel",
        apellido: "García",
        rol: "GESTOR_CASAS"
    };

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                <Text style={styles.title}>Panel del Gestor</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>{gestor.nombre} {gestor.apellido}</Text>

                    <Text style={styles.label}>Rol:</Text>
                    <Text style={styles.value}>{gestor.rol}</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log("Ir a citas")}
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
        paddingTop: 150,
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
    label:
    {
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
