import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";


type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function AdminHomeScreen() {
    const navigation = useNavigation<NavProp>();

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoClienteUno.png")}
            style={styles.background}
        >
            <View style={styles.container}>

                {/* Imagen del administrador 
                <Image
                    source={require("../../../assets/susuna.png")}
                    style={styles.profileImage}
                />*/}

                <Text style={styles.name}>Susana García</Text>
                <Text style={styles.role}>Administración</Text>

                <Text style={styles.sectionTitle}>Funciones</Text>

                {/* ÚNICO BOTÓN */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("AdminPropiedades")}
                >
                    <Text style={styles.buttonText}>Modificar Propiedades</Text>
                </TouchableOpacity>

                <Text style={styles.note}>
                    * Este perfil permite editar propiedades del catálogo.
                </Text>

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
        alignItems: "center",
        paddingTop: 175,
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000000",
    },
    role: {
        fontSize: 18,
        color: "#00A86B",
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 20,
    },
    button: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.9)",
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 12,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
        color: "#00A86B",
    },
    note: {
        marginTop: 25,
        fontSize: 18,
        color: "#000000",
        textAlign: "center",
        opacity: 0.8,
    },
});
