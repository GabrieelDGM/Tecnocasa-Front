import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function EditarPropiedadScreen() {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();

    const { propiedadId } = route.params;


    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [zona, setZona] = useState("");

    const guardarCambios = () => {
        alert("Cambios guardados (visual)");
        navigation.goBack();
    };

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteDos.png")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Editar Propiedad #{propiedadId}</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Precio"
                    value={precio}
                    onChangeText={setPrecio}
                />

                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Descripción"
                    value={descripcion}
                    onChangeText={setDescripcion}
                    multiline
                />

                <TextInput
                    style={styles.input}
                    placeholder="Ciudad"
                    value={ciudad}
                    onChangeText={setCiudad}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Zona"
                    value={zona}
                    onChangeText={setZona}
                />

                <TouchableOpacity style={styles.button} onPress={guardarCambios}>
                    <Text style={styles.buttonText}>Guardar cambios</Text>
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
        paddingTop: 100,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 25,
        textAlign: "center",
    },
    input: {
        backgroundColor: "rgba(255,255,255,0.9)",
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    textArea: {
        height: 120,
        textAlignVertical: "top",
    },
    button: {
        backgroundColor: "#00A86B",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});
