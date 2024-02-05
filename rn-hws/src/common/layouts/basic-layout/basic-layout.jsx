import React from 'react';
import styles from './styles';
import {ImageBackground, SafeAreaView} from "react-native";


const BasicLayout = ({header,children, footer}) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    style={styles.container}
                    source={require('../../../../assets/bg-img/bg-img3.jpg')}>
                    {header}
                    {children}
                    {footer}
                </ImageBackground>
            </SafeAreaView>
        </>
    );
};

export default BasicLayout;