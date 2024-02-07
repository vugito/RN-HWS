import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
            <Stack.Screen name='SignIn' component={SignInScreen}/>
        </Stack.Navigator>
    )
}

export default RootNavigation;