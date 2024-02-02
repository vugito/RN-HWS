import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import MarketPage from "./src/components/pages/market-page/market-page";
import MainPage from "./src/components/pages/mainpage/mainpage";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {/*Homework 1*/}
            {/*<MainPage/>*/}

            {/*Homework 2*/}
            <MarketPage/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
