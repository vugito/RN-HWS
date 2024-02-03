import React from 'react';
import styles from './styles';
import {View} from "react-native";

const PageHeader = ({left, center, right}) => {
    return (
        <>
            <View style={styles.container}>
                {left}
                {center}
                {right}
            </View>
        </>
    );
};

export default PageHeader;