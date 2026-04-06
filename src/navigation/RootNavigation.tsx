import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa tus pantallas
import HomeScreen from "../screens/InicioScreens/HomeScreen";
import LoginScreen from "../screens/InicioScreens/LoginScreen";
import RegisterScreen from "../screens/InicioScreens/RegisterScreen";
import ClientHomeScreen from "../screens/ClienteScreens/ClienteScreens";
import PropertyDetailScreen from "../screens/ClienteScreens/PropertyDetailScreen";
import AgendaCita from "../screens/ClienteScreens/AgendaCita";
import ConfirmacionCita from "../screens/ClienteScreens/ConfirmacionCita";
import ConfirmScreen from "../screens/ClienteScreens/ConfirmacionCita";
import AdminHome from "../screens/AdminScreens/AdminHome";
import AdminPropiedades from "../screens/AdminScreens/AdminPropiedades";
import EditarPropiedad from "../screens/AdminScreens/EditarPropiedad";
import GestorHome from "../screens/GestorScreens/GestorHome";
import GestorGestionarCitas from "../screens/GestorScreens/GestorGestionarCitas";
import GestorCitas from "../screens/GestorScreens/GestorCitas";
import RecuperarContrasena from "../screens/ContrasenaScreens/RecuperarContrasena";

// Tipos de navegación SOLO para lo que usas ahora
export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    ClientHome: { user: any } | undefined;
    PropertyDetail: { propiedad: any };
    AgendaCita: { propiedad: any };
    ConfirmacionCita: {
        propiedad: any;
        nombre: string;
        apellido: string;
        email: string;
        telefono: string;
        motivo: string;
        usuarioId: number;
    };
    Confirm: undefined;
    AdminHome: {
        nombre: string;
        apellido: string;
        rol: string;
    };
    AdminPropiedades: undefined;
    EditarPropiedad: { propiedad: number };

    GestorHome: {
        id: number;
        nombre: string;
        apellido: string;
        tipoGestor: string;
    };
    GestorCitas: {
        gestorId: number;
    };
    GestionCita: {
        cita: any;
    };
    RecuperarPassword: undefined;



};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ClientHome"
                    component={ClientHomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="PropertyDetail"
                    component={PropertyDetailScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AgendaCita"
                    component={AgendaCita}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ConfirmacionCita"
                    component={ConfirmacionCita}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Confirm"
                    component={ConfirmScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AdminHome"
                    component={AdminHome}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="AdminPropiedades"
                    component={AdminPropiedades}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditarPropiedad"
                    component={EditarPropiedad}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GestorHome"
                    component={GestorHome}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="GestorCitas"
                    component={GestorCitas}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="GestionCita"
                    component={GestorGestionarCitas}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RecuperarPassword"
                    component={RecuperarContrasena}
                    options={{ headerShown: false }}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}
