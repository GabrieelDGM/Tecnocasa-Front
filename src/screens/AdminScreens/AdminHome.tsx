import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
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

                <View style={styles.headerLeft}>
                    <Text style={styles.name}>Susana García</Text>
                    <Text style={styles.role}>Administración</Text>
                </View>

                
                <Text style={styles.sectionTitle}>Funciones</Text>

                
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
        paddingTop: 200,
        paddingHorizontal: 25,
    },

   
    headerLeft: {
        alignItems: "flex-start",
        marginBottom: 30,
    },

    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 5,
    },
    role: {
        fontSize: 20,
        color: "#00A86B",
        marginBottom: 25,
    },

    sectionTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 20,
        textAlign: "left",
    },

    button: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.9)",
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 12,
        alignSelf: "flex-start", 
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "#00A86B",
    },

    note: {
        marginTop: 40,
        fontSize: 20,
        color: "#000000",
        textAlign: "center",
        opacity: 0.8,
    },
});
