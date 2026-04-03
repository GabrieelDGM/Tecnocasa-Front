import { View, Text, StyleSheet, Pressable, ImageBackground, Alert } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootNavigation";
import { confirmarCita, eliminarCita } from "../../api/CitaApi";

export default function GestorGestionarCitas() {

    const route = useRoute<RouteProp<RootStackParamList, "GestionCita">>();
    const navigation = useNavigation();

    const { cita } = route.params;

    const handleConfirmar = async () => {
        try {
            await confirmarCita(cita.id);
            Alert.alert("Éxito", "La cita ha sido confirmada.");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Error", "No se pudo confirmar la cita.");
            console.log(error);
        }
    };

    const handleEliminar = async () => {
        Alert.alert(
            "Eliminar cita",
            "¿Seguro que deseas eliminar esta cita?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await eliminarCita(cita.id);
                            Alert.alert("Eliminada", "La cita ha sido eliminada.");
                            navigation.goBack();
                        } catch (error) {
                            Alert.alert("Error", "No se pudo eliminar la cita.");
                            console.log(error);
                        }
                    }
                }
            ]
        );
    };

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Volver</Text>
                </Pressable>

                <Text style={styles.title}>Gestión de cita</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Cliente:</Text>
                    <Text style={styles.value}>{cita.nombre} {cita.apellido}</Text>

                    <Text style={styles.label}>Propiedad:</Text>
                    <Text style={styles.value}>{cita.propiedadTitulo}</Text>

                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.value}>{cita.telefono}</Text>

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{cita.email}</Text>

                    <Text style={styles.label}>Motivo:</Text>
                    <Text style={styles.value}>{cita.motivo}</Text>

                    <Text style={styles.label}>Estado actual:</Text>
                    <Text style={styles.value}>{cita.estado}</Text>
                </View>

                <Pressable style={styles.confirmButton} onPress={handleConfirmar}>
                    <Text style={styles.buttonText}>Confirmar cita</Text>
                </Pressable>

                <Pressable style={styles.deleteButton} onPress={handleEliminar}>
                    <Text style={styles.buttonText}>Eliminar cita</Text>
                </Pressable>

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
