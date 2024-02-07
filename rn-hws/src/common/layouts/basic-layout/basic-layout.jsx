import React from 'react';
import styles from './styles';
import {ImageBackground, SafeAreaView} from "react-native";
import BasicScreenFooter from "../../../components/sections/Footers/BasicScreenFooter/BasicScreenFooter";
import ChangeableScreenHeader
    from "../../../components/sections/Headers/ChangeableScreenHeader/ChangeableScreenHeader";

const BasicLayout = ({
                         children,
                         headerShown,
                         headerRightBtnType,
                         headerLeftBtnType,
                         headerTitle,
                         footerShown,
                         navigation
                     }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={require('../../../../assets/bg-img/bg-img3.jpg')}>

                {headerShown &&
                    <ChangeableScreenHeader leftBtnShown={headerLeftBtnType} rightBtnShown={headerRightBtnType}
                                            headerTitle={headerTitle} navigation={navigation}/>}
                {children}
                {footerShown && <BasicScreenFooter navigation={navigation}/>}

            </ImageBackground>
        </SafeAreaView>
    );
};

export default BasicLayout;