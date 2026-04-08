import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, Linking, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";


type NavProp = NativeStackNavigationProp<RootStackParamList, "PropertyDetail">;

export default function PropertyDetailScreen() {
    const navigation = useNavigation<NavProp>();
    const route = useRoute();
    const { propiedad }: any = route.params;
    const [usuario, setUsuario] = useState();

    useEffect(() => {
        const cargarUsuario = async () => {
            const data = await AsyncStorage.getItem("usuario");
            if (data) setUsuario(JSON.parse(data));
        };
        cargarUsuario();
    }, []);



    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                {/* Botón volver */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>

                <ScrollView contentContainerStyle={styles.scrollContent}>

                    {/* SLIDER DE IMÁGENES */}
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={{ marginBottom: 20 }}
                    >
                        {propiedad.imagenes?.map((img: string, index: number) => (
                            <Image
                                key={index}
                                source={{ uri: img }}
                                style={styles.image}
                            />
                        ))}
                    </ScrollView>

                    {/* Título */}
                    <Text style={styles.title}>{propiedad.titulo}</Text>

                    {/* Precio */}
                    <Text style={styles.price}>
                        {Number(propiedad.precio).toLocaleString("es-ES")} €
                    </Text>


                    {/* Ciudad */}
                    <Text style={styles.city}>{propiedad.ciudad}</Text>

                    {/* Descripción */}
                    <Text style={styles.sectionTitle}>Descripción</Text>
                    <Text style={styles.description}>
                        {propiedad.descripcion || "Esta propiedad no tiene descripción disponible."}
                    </Text>

                    {/* Ubicación */}
                    <Text style={styles.sectionTitle}>Ubicación</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(propiedad.ubicacionGoogle || "https://maps.app.goo.gl/")}>
                        <Text style={styles.link}>Ver en Google Maps</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (!usuario) {
                                alert("Debes estar registrado para agendar una cita");
                                return;
                            }
                            navigation.navigate("AgendaCita", { propiedad });
                        }}
                    >
                        <Text style={styles.buttonText}>Agenda tu cita</Text>
                    </TouchableOpacity>

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
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 175,
    },
    backButton: {
        position: "absolute",
        top: 60,
        right: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: "#00A86B",
    },
    backText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    scrollContent: {
        paddingBottom: 40,
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 12,
        marginRight: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#00A86B",
    },
    price: {
        fontSize: 22,
        fontWeight: "600",
        marginTop: 20,
    },
    city: {
        fontSize: 16,
        color: "#000000",
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 5,
        color: "#00A86B",
    },
    description: {
        fontSize: 16,
        color: "#000000",
        lineHeight: 22,
    },
    link: {
        fontSize: 16,
        color: "#007AFF",
        textDecorationLine: "underline",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#00A86B",
        paddingVertical: 14,
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
