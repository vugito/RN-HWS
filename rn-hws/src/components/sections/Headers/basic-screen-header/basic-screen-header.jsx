import React from 'react';
import styles from './styles';
import {Text, View} from "react-native";
import CustomButton from "../../../../common/customs/custom-button/custom-button";

const BasicScreenHeader = ({headerTitle, navigation}) => {
    return (
        <View style={styles.container}>
            <CustomButton text='Back' navigation={()=>navigation.goBack()} />
            <Text style={styles.headerTitle}>{headerTitle}</Text>
            <CustomButton text='Filter' />
        </View>
    );
};

export default BasicScreenHeader;