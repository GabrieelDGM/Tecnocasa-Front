import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from "react-native";

export default function GestorCitas() {

    
    const citas = [
        {
            id: 1,
            nombre: "Carlos",
            apellido: "López",
            telefono: "612345678",
            email: "carlos@gmail.com",
            motivo: "Quiere visitar la casa",
            estado: "PENDIENTE"
        },
        {
            id: 2,
            nombre: "Ana",
            apellido: "Martínez",
            telefono: "698765432",
            email: "ana@gmail.com",
            motivo: "Consulta sobre precio",
            estado: "CONFIRMADA"
        },
        {
            id: 3,
            nombre: "Luis",
            apellido: "Santos",
            telefono: "611223344",
            email: "luis@gmail.com",
            motivo: "Quiere ver el piso",
            estado: "PENDIENTE"
        }
    ];

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>

                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Citas asignadas</Text>

                {citas.map((cita) => (
                    <TouchableOpacity
                        key={cita.id}
                        style={styles.card}
                        onPress={() => console.log("Ir a gestionar cita")}
                    >
                        <Text style={styles.cardTitle}>{cita.nombre} {cita.apellido}</Text>

                        <View style={styles.row}>
                            <Text style={styles.cardLabel}>Tel:</Text>
                            <Text style={styles.cardValue}>{cita.telefono}</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.cardLabel}>Email:</Text>
                            <Text style={styles.cardValue}>{cita.email}</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.cardLabel}>Motivo:</Text>
                            <Text style={styles.cardValue}>{cita.motivo}</Text>
                        </View>

                        <Text style={[
                            styles.cardEstado,
                            cita.estado === "CONFIRMADA" ? styles.estadoConfirmada : styles.estadoPendiente
                        ]}>
                            {cita.estado === "CONFIRMADA" ? "✔ Confirmada" : "⏳ Pendiente"}
                        </Text>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { flex: 1, width: "100%", height: "100%" },

    container: {
        paddingTop: 150,
        paddingHorizontal: 20,
        paddingBottom: 40
    },

    title: {
        fontSize: 30,
        fontWeight: "800",
        color: "#008060",
        marginBottom: 20
    },

    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#222"
    },

    row: {
        flexDirection: "row",
        marginBottom: 4
    },

    cardLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#444",
        width: 80
    },

    cardValue: {
        fontSize: 16,
        color: "#333",
        flex: 1
    },

    cardEstado: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: "bold"
    },

    estadoConfirmada: { color: "#008060" },
    estadoPendiente: { color: "#C27C00" },

    backButton: {
        position: "absolute",
        top: 50,
        right: 20,
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: "#008060",
        borderRadius: 8,
        zIndex: 10,
    },

    backText: {
        fontSize: 17,
        color: "white"
    }
});
