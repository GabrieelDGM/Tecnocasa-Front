import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigation";
import { registerUsuario } from "../../api/usuarioApi";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function RegisterScreen() {
    const navigation = useNavigation<NavProp>();

    const [usuario, setUsuario] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [direccion, setDireccion] = useState("");
    const [cp, setCp] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {

        if (
            !usuario ||
            !nombre ||
            !apellido ||
            !dni ||
            !direccion ||
            !cp ||
            !telefono ||
            !correo ||
            !password ||
            !confirmPassword
        ) {
            alert("Por favor, completa todos los campos");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            const data = {
                usuario,
                nombre,
                apellido,
                dni,
                direccion,
                codigoPostal: cp,
                telefono,
                correo,
                contrasena: password,
            };

            await registerUsuario(data);

            alert("Usuario registrado correctamente");
            navigation.navigate("Login");

        } catch (error: any) {
            alert("Error al registrar usuario");
        }
    };

    return (
        <ImageBackground
            source={require("../../../assets/fondos/FondoInicioTres.png")}
            style={styles.background}
        >
            <View style={styles.header}>
                <Text style={styles.title}>Registro</Text>
            </View>

            <ScrollView contentContainerStyle={styles.formContainer}>
                <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor="#666" value={usuario} onChangeText={setUsuario} />
                <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#666" value={nombre} onChangeText={setNombre} />
                <TextInput style={styles.input} placeholder="Apellido" placeholderTextColor="#666" value={apellido} onChangeText={setApellido} />
                <TextInput style={styles.input} placeholder="DNI / NIE" placeholderTextColor="#666" value={dni} onChangeText={setDni} />
                <TextInput style={styles.input} placeholder="Dirección" placeholderTextColor="#666" value={direccion} onChangeText={setDireccion} />
                <TextInput style={styles.input} placeholder="Código Postal" placeholderTextColor="#666" keyboardType="numeric" value={cp} onChangeText={setCp} />
                <TextInput style={styles.input} placeholder="Teléfono" placeholderTextColor="#666" keyboardType="phone-pad" value={telefono} onChangeText={setTelefono} />
                <TextInput style={styles.input} placeholder="Correo Electrónico" placeholderTextColor="#666" keyboardType="email-address" value={correo} onChangeText={setCorreo} />

                <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#666" secureTextEntry value={password} onChangeText={setPassword} />
                <TextInput style={styles.input} placeholder="Confirmar Contraseña" placeholderTextColor="#666" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleRegister}
                >
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
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
    header: {
        paddingTop: 170,
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#00A86B",
        marginBottom: 20,
    },
    formContainer: {
        paddingHorizontal: 30,
        paddingBottom: 50,
        alignItems: "center",
    },
    input: {
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 12,
        fontSize: 15,
        borderColor: "#00A86B",
        borderWidth: 4,
    },
    button: {
        width: "100%",
        backgroundColor: "#00A86B",
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});
