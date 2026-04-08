import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";
import { getPropiedades } from "../../api/propiedades.api";
import AsyncStorage from "@react-native-async-storage/async-storage";


type Propiedad = {
    id: number;
    titulo: string;
    precio: string;
    ciudad: string;
    tipo: "CASA" | "PISO";
    imagenes: string[];
};

type NavProp = NativeStackNavigationProp<RootStackParamList, "ClientHome">;

export default function ClientHomeScreen() {
    const navigation = useNavigation<NavProp>();

    const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
    const [propiedadesFiltradas, setPropiedadesFiltradas] = useState<Propiedad[]>([]);


    const cargarPropiedades = async () => {
        try {
            const data = await getPropiedades();
            setPropiedades(data);
            setPropiedadesFiltradas(data);
        } catch (error) {
            console.log("Error cargando propiedades:", error);
        }
    };

    useEffect(() => {
        cargarPropiedades();
    }, []);


    const filtrarPorTipo = (tipo: "CASA" | "PISO") => {
        const filtradas = propiedades.filter((p) => p.tipo === tipo);
        setPropiedadesFiltradas(filtradas);
    };

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                <Text style={styles.bienvenida}>Bienvenido</Text>
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={async () => {
                        await AsyncStorage.removeItem("usuario");
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Login" }],
                        });
                    }}
                >
                    <Text style={styles.logoutText}>Cerrar sesión</Text>
                </TouchableOpacity>


                <View style={styles.filterRow}>
                    <TouchableOpacity style={styles.filterButton} onPress={() => setPropiedadesFiltradas(propiedades)}>
                        <Text style={styles.filterText}>Todos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton} onPress={() => filtrarPorTipo("CASA")}>
                        <Text style={styles.filterText}>Casa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton} onPress={() => filtrarPorTipo("PISO")}>
                        <Text style={styles.filterText}>Piso</Text>
                    </TouchableOpacity>
                </View>


                <ScrollView contentContainerStyle={styles.grid}>
                    {propiedadesFiltradas.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            onPress={() => navigation.navigate("PropertyDetail", { propiedad: item })}
                        >
                            <Image
                                source={{ uri: item.imagenes?.[0] }}
                                style={styles.cardImage}
                            />

                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>{item.titulo}</Text>
                                <Text style={styles.cardPrice}>
                                    {Number(item.precio).toLocaleString("es-ES")} €
                                </Text>


                                <Text style={styles.cardCity}>{item.ciudad}</Text>
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
        paddingHorizontal: 20,
        paddingTop: 190,
    },
    bienvenida: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#00A86B",
        marginBottom: 20,
    },
    filterRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    filterButton: {
        backgroundColor: "#00A86B",
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 10,
    },
    filterText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingBottom: 40,
    },
    card: {
        width: "48%",
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 12,
        marginBottom: 15,
        overflow: "hidden",
    },
    cardImage: {
        width: "100%",
        height: 120,
    },
    cardInfo: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00A86B",
    },
    cardPrice: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 5,
    },
    cardCity: {
        fontSize: 13,
        color: "#555",
        marginTop: 5,
    },
    logoutButton: {
        position: "absolute",
        top: 50,
        right: 20,
        backgroundColor: "#00A86B",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        zIndex: 20,
    },
    logoutText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

});
