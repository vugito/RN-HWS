import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import MarketPage from "./src/components/pages/market-page/market-page";
import MainPage from "./src/components/pages/mainpage/mainpage";
import BasicLayout from "./src/common/layouts/basic-layout/basic-layout";
import BottomBar from "./src/components/sections/bottom-bar/bottom-bar";
import PageHeader from "./src/components/sections/page-header/page-header";
import AuiButton from "./src/common/aui/aui-button/aui-button";
import FeedPage from "./src/components/pages/feed-page/feed-page";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {/* HW 1 */}
            {/*<MainPage/>*/}

            {/* HW 2 & 3 */}
            {/*<MarketPage/>*/}

            {/* HW 3 */}
            <FeedPage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
