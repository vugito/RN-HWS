import React from 'react';
import styles from './styles';
import {ImageBackground, SafeAreaView} from "react-native";
import BasicScreenHeader from "../../../components/sections/Headers/basic-screen-header/basic-screen-header";
import BasicScreenFooter from "../../../components/sections/Footers/BasicScreenFooter/BasicScreenFooter";

const BasicLayout = ({children, headerShown, headerTitle, footerShown, navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={require('../../../../assets/bg-img/bg-img3.jpg')}>

                {headerShown && <BasicScreenHeader headerTitle={headerTitle} navigation={navigation}/>}
                {children}
                {footerShown && <BasicScreenFooter navigation={navigation}/>}

            </ImageBackground>
        </SafeAreaView>
    );
};

export default BasicLayout;