import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";

type Propiedad = {
    id: number;
    titulo: string;
    precio: string;
    ciudad: string;
    imagen_url: string;
};

type NavProp = NativeStackNavigationProp<RootStackParamList, "ClientHome">;

export default function ClientHomeScreen() {
    const navigation = useNavigation<NavProp>();

    const [propiedades, setPropiedades] = useState<Propiedad[]>([]);

    const propiedadesMock: Propiedad[] = [
        {
            id: 1,
            titulo: "Casa Moderna",
            precio: "250.000€",
            ciudad: "Madrid",
            imagen_url: "https://picsum.photos/300/200?random=1"
        },
        {
            id: 2,
            titulo: "Apartamento Centro",
            precio: "180.000€",
            ciudad: "Barcelona",
            imagen_url: "https://picsum.photos/300/200?random=2"
        },
        {
            id: 3,
            titulo: "Chalet Familiar",
            precio: "320.000€",
            ciudad: "Valencia",
            imagen_url: "https://picsum.photos/300/200?random=3"
        },
    ];

    useEffect(() => {
        setPropiedades(propiedadesMock);
    }, []);

    return (
        <ImageBackground
            source={require("../../../assets/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                <Text style={styles.bienvenida}>Bienvenido Juan</Text>

                <TextInput
                    style={styles.search}
                    placeholder="Buscar propiedad..."
                    placeholderTextColor="#666"
                />

                <ScrollView contentContainerStyle={styles.grid}>
                    {propiedades.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            onPress={() => navigation.navigate("PropertyDetail", { propiedad: item })}
                        >
                            <Image
                                source={{ uri: item.imagen_url }}
                                style={styles.cardImage}
                            />

                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>{item.titulo}</Text>
                                <Text style={styles.cardPrice}>{item.precio}</Text>
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
    search: {
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
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
});
