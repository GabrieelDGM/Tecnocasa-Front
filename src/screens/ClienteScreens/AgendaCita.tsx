import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useState } from "react";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";

type AgendaCitaRouteProp = RouteProp<RootStackParamList, "AgendaCita">;
type AgendaCitaNavProp = NativeStackNavigationProp<RootStackParamList, "AgendaCita">;

export default function AgendaCitaScreen() {
    const route = useRoute<AgendaCitaRouteProp>();
    const navigation = useNavigation<AgendaCitaNavProp>();

    const { propiedad } = route.params;

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [motivo, setMotivo] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");

    const confirmarVisual = () => {
        navigation.navigate("ConfirmacionCita", {
            propiedad,
            nombre,
            apellido,
            email,
            telefono,
            motivo,
            fecha: new Date(fecha),
            hora: new Date(hora)
        });
    };

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>

                    <Text style={styles.title}>Agenda tu cita</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Apellido"
                        value={apellido}
                        onChangeText={setApellido}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono"
                        keyboardType="phone-pad"
                        value={telefono}
                        onChangeText={setTelefono}
                    />

                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Motivo de la cita"
                        multiline
                        value={motivo}
                        onChangeText={setMotivo}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Fecha (YYYY-MM-DD)"
                        value={fecha}
                        onChangeText={setFecha}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Hora (HH:MM)"
                        value={hora}
                        onChangeText={setHora}
                    />

                    <TouchableOpacity style={styles.button} onPress={confirmarVisual}>
                        <Text style={styles.buttonText}>Confirmar cita</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    scrollContent: {
        paddingTop: 180,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#00A86B",
        marginBottom: 30,
    },
    input: {
        backgroundColor: "rgba(255,255,255,0.9)",
        padding: 15,
        borderRadius: 10,
        fontSize: 18,
        marginBottom: 20,
    },
    textArea: {
        height: 120,
        textAlignVertical: "top",
    },
    button: {
        backgroundColor: "#00A86B",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 40,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});
