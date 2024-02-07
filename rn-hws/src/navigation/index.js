import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import Home from "../screens/Home";
import MarketScreen from "../screens/MarketScreen/MarketScreen";
import FeedScreen from "../screens/FeedScreen/FeedScreen";
import ContentScreen from "../screens/ContentScreen/ContentScreen";
import MainScreen from "../screens/MainScreen/MainScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home">

            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
            <Stack.Screen name='SignIn' component={SignInScreen}/>
            <Stack.Screen name='Market' component={MarketScreen}/>
            <Stack.Screen name='Feed' component={FeedScreen}/>
            <Stack.Screen name='Content' component={ContentScreen}/>

        </Stack.Navigator>
    )
}

export default RootNavigation;