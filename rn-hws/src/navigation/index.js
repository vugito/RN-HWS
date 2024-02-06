import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Contact from "../screens/Contact";
import MarketPage from "../components/pages/market-page/market-page";
import ContentPage from "../components/pages/content-page/content-page";
import FeedPage from "../components/pages/feed-page/feed-page";
import Header from "../components/sections/header/header";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            {/*<Stack.Screen name='Profile' component={Profile}/>*/}
            {/*<Stack.Screen name='Contact' component={Contact}/>*/}
            <Stack.Screen name='MarketPage' component={MarketPage}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='FeedPage' component={FeedPage}/>
            <Stack.Screen name='ContentPage' component={ContentPage}/>
        </Stack.Navigator>
    )
}

export default RootNavigation;