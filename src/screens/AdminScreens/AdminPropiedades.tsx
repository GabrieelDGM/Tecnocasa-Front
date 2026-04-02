import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";
import { useEffect, useState } from "react";
import { getPropiedades } from "../../api/propiedades.api";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function AdminPropiedadesScreen() {
    const navigation = useNavigation<NavProp>();

    const [propiedades, setPropiedades] = useState([]);
    const [filtro, setFiltro] = useState("TODOS");

    useEffect(() => {
        cargarPropiedades();
    }, []);

    const cargarPropiedades = async () => {
        try {
            const data = await getPropiedades();
            setPropiedades(data);
        } catch (error) {
            console.log("Error cargando propiedades:", error);
        }
    };


    const propiedadesFiltradas = propiedades.filter((p: any) => {
        if (filtro === "TODOS") return true;
        return p.tipo?.toUpperCase() === filtro;
    });

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

                {/* BOTONES DE FILTRO */}
                <View style={styles.filtros}>
                    <TouchableOpacity onPress={() => setFiltro("TODOS")} style={styles.filtroBtn}>
                        <Text style={styles.filtroTxt}>Todos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setFiltro("CASA")} style={styles.filtroBtn}>
                        <Text style={styles.filtroTxt}>Casas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setFiltro("PISO")} style={styles.filtroBtn}>
                        <Text style={styles.filtroTxt}>Pisos</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.grid}>
                    {propiedadesFiltradas.map((item: any) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            onPress={() => navigation.navigate("EditarPropiedad", { propiedad: item })}
                        >
                            <Image
                                source={require("../../../assets/propiedades/casaUno.png")}
                                style={styles.image}
                            />

                            <View style={styles.info}>
                                <Text style={styles.location}>
                                    {item.ciudad}{item.detalles ? `, ${item.detalles}` : ""}
                                </Text>

                                <Text style={styles.price}>
                                    {item.precio?.toLocaleString("es-ES")} €
                                </Text>

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

    
    filtros: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    filtroBtn: {
        backgroundColor: "#00A86B",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    filtroTxt: {
        color: "#fff",
        fontWeight: "600",
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
