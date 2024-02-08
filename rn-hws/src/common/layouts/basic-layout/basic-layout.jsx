import React from 'react';
import styles from './styles';
import {ImageBackground, SafeAreaView} from "react-native";
import BasicScreenFooter from "../../../components/sections/Footers/BasicScreenFooter/BasicScreenFooter";
import ChangeableScreenHeader
    from "../../../components/sections/Headers/ChangeableScreenHeader/ChangeableScreenHeader";
import BasicScreenHeader from "../../../components/sections/Headers/BasicScreenHeader/BasicScreenHeader";

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
                source={require('../../../../assets/bg-img/bg-img1.jpg')}>

                {/*{headerShown &&*/}
                {/*    <ChangeableScreenHeader leftBtnShown={headerLeftBtnType} rightBtnShown={headerRightBtnType}*/}
                {/*                            headerTitle={headerTitle} navigation={navigation}/>}*/}

                {headerShown ? <ChangeableScreenHeader leftBtnShown={headerLeftBtnType} rightBtnShown={headerRightBtnType}
                                            headerTitle={headerTitle} navigation={navigation}/>
                : <BasicScreenHeader headerTitle='Log In' navigation={navigation}/>}



                {children}
                {footerShown && <BasicScreenFooter navigation={navigation}/>}

            </ImageBackground>
        </SafeAreaView>
    );
};

export default BasicLayout;