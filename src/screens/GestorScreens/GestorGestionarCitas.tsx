import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function GestorGestionarCitas() {

    // Datos falsos solo para visual
    const cita = {
        nombre: "Carlos",
        apellido: "López",
        telefono: "612345678",
        email: "carlos@gmail.com",
        motivo: "Quiere visitar la casa"
    };

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Gestión de cita</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Cliente:</Text>
                    <Text style={styles.value}>{cita.nombre} {cita.apellido}</Text>

                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.value}>{cita.telefono}</Text>

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{cita.email}</Text>

                    <Text style={styles.label}>Motivo:</Text>
                    <Text style={styles.value}>{cita.motivo}</Text>
                </View>

                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.buttonText}>Confirmar cita</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.buttonText}>Eliminar cita</Text>
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
        marginBottom: 20
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    value: {
        fontSize: 18,
        marginBottom: 10,
        color: "#222"
    },
    confirmButton: {
        backgroundColor: "#00A86B",
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    deleteButton: {
        backgroundColor: "#D9534F",
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    backButton: {
        position: "absolute",
        top: 50,
        right: 20,
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: "#00A86B",
        borderRadius: 8,
        zIndex: 10,
    },
    backText: {
        fontSize: 17,
        color: "white"
    }
});
