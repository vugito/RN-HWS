import React from 'react';
import styles from './styles';
import {Pressable, Text, View} from "react-native";
import CustomButton from "../../../../common/customs/custom-button/custom-button";

const BasicScreenHeader = ({headerTitle, navigation}) => {
    return (
        <View style={styles.container}>
            {/*<CustomButton text='Back' navigation={()=>navigation.goBack()} />*/}
            <Pressable onPress={()=>navigation.navigate('Market')}>
                <Text style={styles.headerTitle}>{headerTitle}</Text>
            </Pressable>
            {/*<CustomButton text='Filter' />*/}
        </View>
    );
};

export default BasicScreenHeader;