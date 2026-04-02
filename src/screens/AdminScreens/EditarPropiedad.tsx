import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { updatePropiedad } from "../../api/propiedades.api";

export default function EditarPropiedadScreen() {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();

    const { propiedad } = route.params;


    const [precio, setPrecio] = useState(String(propiedad.precio));
    const [descripcion, setDescripcion] = useState(propiedad.descripcion);
    const [ciudad, setCiudad] = useState(propiedad.ciudad);
    const [zona, setZona] = useState(propiedad.detalles);

    const guardarCambios = async () => {
        try {
            const dataActualizada = {
                tipo: propiedad.tipo,
                titulo: propiedad.titulo,
                descripcion,
                precio: Number(precio),
                detalles: zona,
                ciudad,
                ubicacionGoogle: propiedad.ubicacionGoogle
            };

            await updatePropiedad(propiedad.id, dataActualizada);

            Alert.alert("Éxito", "Propiedad actualizada correctamente");
            navigation.goBack();

        } catch (error) {
            Alert.alert("Error", "No se pudo actualizar la propiedad");
            console.log(error);
        }
    };

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}> Volver</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Editar Propiedad {propiedad.titulo}</Text>

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
        paddingTop: 170,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 25,
        textAlign: "center",
    },
    input: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 15,
        borderColor: "#00A86B",
        borderWidth: 5,
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
    backButton: {
        position: "absolute",
        top: 50,
        right: 20,
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: "#00A86B",
        borderRadius: 8,
    },
    backText: {
        fontSize: 17,
        fontWeight: "100",
        color: "#ffffff",
    },
});
