import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from "../../sections/header/header";
import Body from "../../sections/body/body";

const MarketPage = () => {
    return (
        <>
            <View style={styles.container}>
                <Header/>
                <Body/>
            </View>
        </>
    );
};

export default MarketPage;