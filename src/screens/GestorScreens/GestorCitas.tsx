import { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from "react-native";
import { useRoute, useNavigation, RouteProp, NavigationProp, useFocusEffect } from "@react-navigation/native";
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

    useFocusEffect(
        useCallback(() => {
            const cargarCitas = async () => {
                try {
                    const data = await getCitasPorGestor(gestorId);
                    setCitas(Array.isArray(data) ? data : []);
                } catch (error) {
                    console.log("Error cargando citas:", error);
                }
            };

            cargarCitas();
        }, [gestorId])
    );

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>Volver</Text>
            </Pressable>

        
            <View style={styles.content}>
                <Text style={styles.title}>Citas asignadas</Text>

                {citas.length === 0 && (
                    <Text style={styles.noCitas}>No hay citas asignadas.</Text>
                )}

              
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.scrollContent}
                >
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

    content: {
        flex: 1,
        paddingTop: 170,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    scroll: {
        flex: 1,
        marginTop: 10,
    },

    scrollContent: {
        paddingBottom: 40,
    },

    title: {
        fontSize: 30,
        fontWeight: "800",
        color: "#008060",
    },

    noCitas: {
        fontSize: 18,
        color: "#444",
        marginTop: 20,
    },

    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        marginTop: 15,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#222",
    },

    row: {
        flexDirection: "row",
        marginBottom: 4,
    },

    cardLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#444",
        width: 90,
    },

    cardValue: {
        fontSize: 16,
        color: "#333",
        flex: 1,
    },

    cardEstado: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: "bold",
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
        zIndex: 20,
    },

    backText: {
        fontSize: 17,
        color: "white",
    },
});
