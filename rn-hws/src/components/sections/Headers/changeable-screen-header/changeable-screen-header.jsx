import React from 'react';
import styles from './styles';
import {Text, View} from "react-native";
import CustomButton from "../../../../common/customs/custom-button/custom-button";
import navigation from "../../../../navigation";

const ChangeableScreenHeader = ({headerShown, headerTitle, leftBtnShown, rightBtnShown}) => {
    return (
        (headerShown &&
        <View style={styles.container}>
            {leftBtnShown && <CustomButton text='Back' navigation={()=>navigation.goBack()} />}
            <Text style={styles.headerTitle}>{headerTitle}</Text>
            {rightBtnShown && <CustomButton text='Filter' />}
        </View>)
    );
};

export default ChangeableScreenHeader;