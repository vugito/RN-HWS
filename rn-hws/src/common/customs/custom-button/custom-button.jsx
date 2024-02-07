import React from 'react';
import styles from './styles';
import {Pressable, Text} from "react-native";

const CustomButton = ({text, navigation}) => {

    return (
        <Pressable onPress={navigation} style={styles.container}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;