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

// Tipos de navegación SOLO para lo que usas ahora
export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    ClientHome: undefined;
    PropertyDetail: { propiedad: any };
    AgendaCita: { propiedad: any /* , usuario: any */ };
    ConfirmacionCita: { propiedad: any; fecha: Date; hora: Date; motivo: string };

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



            </Stack.Navigator>
        </NavigationContainer>
    );
}
