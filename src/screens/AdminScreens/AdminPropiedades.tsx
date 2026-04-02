import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";


type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function AdminPropiedadesScreen() {
    const navigation = useNavigation<NavProp>();

    // Datos visuales temporales (luego se reemplazan por la API)
    const propiedades = [
        {
            id: 1,
            ciudad: "Santa Cruz de Tenerife",
            zona: "La Salle",
            precio: "150.000€",
            imagen: require("../../../assets/propiedades/casaUno.png"),
        },
        {
            id: 2,
            ciudad: "Los Cristianos",
            zona: "",
            precio: "545.000€",
            imagen: require("../../../assets/propiedades/casaDos.png"),
        },
        {
            id: 3,
            ciudad: "La Laguna",
            zona: "La Cuesta",
            precio: "500€/Mes",
            imagen: require("../../../assets/propiedades/alquilerDos.png"),
        },
        {
            id: 4,
            ciudad: "Santa Cruz de Tenerife",
            zona: "Calle Castillo",
            precio: "250.000€",
            imagen: require("../../../assets/propiedades/casaDos.png"),
        },
        {
            id: 5,
            ciudad: "La Laguna",
            zona: "San Benito",
            precio: "400€/Mes",
            imagen: require("../../../assets/propiedades/alquilerUno.png"),
        },
    ];

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}> Volver</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Modificar Propiedades</Text>

                <ScrollView contentContainerStyle={styles.grid}>
                    {propiedades.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            onPress={() => navigation.navigate("EditarPropiedad", { propiedadId: item.id })}
                        >
                            <Image source={item.imagen} style={styles.image} />
                            <View style={styles.info}>
                                <Text style={styles.location}>
                                    {item.ciudad}{item.zona ? `, ${item.zona}` : ""}
                                </Text>
                                <Text style={styles.price}>{item.precio}</Text>
                            </View>
                        </TouchableOpacity>
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
    container: {
        flex: 1,
        paddingTop: 200,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 20,
        textAlign: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingBottom: 40,
    },
    card: {
        width: "48%",
        backgroundColor: "rgba(255,255,255,0.95)",
        borderRadius: 10,
        marginBottom: 15,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 100,
    },
    info: {
        padding: 10,
    },
    location: {
        fontSize: 14,
        fontWeight: "600",
        color: "#00A86B",
    },
    price: {
        fontSize: 14,
        color: "#333",
        marginTop: 4,
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
