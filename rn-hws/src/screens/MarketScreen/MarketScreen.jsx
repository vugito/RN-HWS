import React from 'react';
import styles from './styles';
import BasicLayout from "../../common/layouts/basic-layout/basic-layout";
import MarketBodyContent from "../../components/sections/Contents/MarketBodyContent/MarketBodyContent";

const MarketScreen = ({navigation}) => {
    return (
        <BasicLayout
            headerShown={true}
            headerTitle='Market'
            footerShown={true}
            navigation={navigation}>

            <MarketBodyContent/>

        </BasicLayout>
    );
};

export default MarketScreen;