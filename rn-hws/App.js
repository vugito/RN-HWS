import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import MarketPage from "./src/components/pages/market-page/market-page";
import MainPage from "./src/components/pages/mainpage/mainpage";
import BasicLayout from "./src/common/layouts/basic-layout/basic-layout";
import BottomBar from "./src/components/sections/bottom-bar/bottom-bar";
import PageHeader from "./src/components/sections/Headers/page-header/page-header";
import CustomButton from "./src/common/customs/custom-button/custom-button";
import FeedPage from "./src/components/pages/feed-page/feed-page";
import ContentPage from "./src/components/pages/content-page/content-page";
import SignIn from "./src/components/pages/sign-in/sign-in";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Contact from "./src/screens/Contact";
import RootNavigation from "./src/navigation";

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                {/* HW 1 */}
                {/*<MainPage/>*/}

                {/* HW 2 & 3 & 4 */}
                {/*<MarketPage/>*/}

                {/* HW 3 */}
                {/*<FeedPage/>*/}

                {/* HW 4(31.01.24) */}
                {/*<ContentPage/>*/}


                {/*<SignIn/>*/}
                <RootNavigation/>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
