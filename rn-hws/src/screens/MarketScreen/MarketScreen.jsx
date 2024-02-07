import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import BasicLayout from "../../../common/layouts/basic-layout/basic-layout";
import BottomBar from "../../sections/bottom-bar/bottom-bar";
import MpBody from "../../sections/mp-body/mp-body";

const MarketScreen = ({navigation}) => {
    return (
        <BasicLayout
            headerShown={true}
            headerTitle='Market'
            footerShown={true}
            navigation={navigation}>
            {/*<Body/>*/}

            <MpBody/>
        </BasicLayout>
    );
};

export default MarketScreen;