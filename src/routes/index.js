import { createNativeStackNavigator } from "@react-navigation/native-stack"

import  Welcome from '../telas/Welcome'
import  Login from '../telas/Login'
import  CriarConta from '../telas/CriarConta'
import  Home from '../telas/Home'
import  Home2 from '../telas/Home2'
import Home3 from "../telas/Home3"
import  OverlayAbacate from '../telas/OverlayAbacate'
import  OverlayAbacate2 from '../telas/OverlayAbacate2'
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown:false}}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown:false}}
            />

            <Stack.Screen
                name="CriarConta"
                component={CriarConta}
                options={{ headerShown:false}}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown:false}}
            />

            <Stack.Screen
                name="OverlayAbacate"
                component={OverlayAbacate}
                options={{ headerShown:false}}
            />

            <Stack.Screen
                name="OverlayAbacate2"
                component={OverlayAbacate2}
                options={{ headerShown:false}}
            />  
            <Stack.Screen
                name="Home2"
                component={Home2}
                options={{ headerShown:false}}
            /> 
            <Stack.Screen
                name="Home3"
                component={Home3}
                options={{ headerShown:false}}
            />
          

        </Stack.Navigator>
    )
}