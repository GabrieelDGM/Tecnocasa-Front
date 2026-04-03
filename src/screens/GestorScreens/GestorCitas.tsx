import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from "react-native";
import { useRoute, useNavigation, RouteProp, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootNavigation";
import { getCitasPorGestor } from "../../api/CitaApi";

type Cita = {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    motivo: string;
    estado: string;
    propiedadId: number;
    propiedadTitulo: string;
};

export default function GestorCitas() {

    const route = useRoute<RouteProp<RootStackParamList, "GestorCitas">>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { gestorId } = route.params;

    const [citas, setCitas] = useState<Cita[]>([]);

    useEffect(() => {
        const cargarCitas = async () => {
            try {
                const data = await getCitasPorGestor(gestorId);
                console.log("CITAS RECIBIDAS:", data);
                setCitas(Array.isArray(data) ? data : []);
            } catch (error) {
                console.log("Error cargando citas:", error);
            }
        };

        cargarCitas();
    }, []);

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>

                <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Volver</Text>
                </Pressable>

                <Text style={styles.title}>Citas asignadas</Text>

                {citas.length === 0 && (
                    <Text style={{ fontSize: 18, color: "#444", marginTop: 20 }}>
                        No hay citas asignadas.
                    </Text>
                )}

                {citas.map((cita) => (
                    <Pressable
                        key={cita.id}
                        style={styles.card}
                        onPress={() => navigation.navigate("GestionCita", { cita })}
                    >
                        <Text style={styles.cardTitle}>{cita.nombre} {cita.apellido}</Text>

                        <View style={styles.row}>
                            <Text style={styles.cardLabel}>Propiedad:</Text>
                            <Text style={styles.cardValue}>{cita.propiedadTitulo}</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.cardLabel}>Tel:</Text>
                            <Text style={styles.cardValue}>{cita.telefono}</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.cardLabel}>Email:</Text>
                            <Text style={styles.cardValue}>{cita.email}</Text>
                        </View>

                        <Text style={[
                            styles.cardEstado,
                            cita.estado === "CONFIRMADA" ? styles.estadoConfirmada : styles.estadoPendiente
                        ]}>
                            {cita.estado}
                        </Text>
                    </Pressable>
                ))}

            </ScrollView>
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
        paddingTop: 170,
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
