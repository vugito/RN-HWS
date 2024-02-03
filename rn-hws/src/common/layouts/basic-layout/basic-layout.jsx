import React from 'react';
import styles from './styles';
import {SafeAreaView} from "react-native";


const BasicLayout = ({header,children, footer}) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                {header}
                {children}
                {footer}
            </SafeAreaView>
        </>
    );
};

export default BasicLayout;