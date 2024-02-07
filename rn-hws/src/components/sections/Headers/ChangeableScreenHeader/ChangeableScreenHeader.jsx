import React from 'react';
import styles from './styles';
import {Text, View} from "react-native";
import CustomButton from "../../../../common/customs/custom-button/custom-button";

// Нуждается в обновлении:
// 1. Оптимизировать Компонент.

const ChangeableScreenHeader = ({headerTitle, leftBtnShown, rightBtnShown, navigation}) => {
    return (
        <View style={styles.container}>
            {leftBtnShown ? <Text>x</Text> : <CustomButton text='Back' navigation={()=>navigation.goBack()} />}
            <Text style={styles.headerTitle}>{headerTitle}</Text>
            {rightBtnShown === 'Login'
                ? <CustomButton text='Login' navigation={()=>navigation.navigate('SignIn')} />
                : <CustomButton text='Filter' />}
        </View>
    );
};

export default ChangeableScreenHeader;