import React from 'react';
import styles from './styles';
import {Pressable, Text} from "react-native";

const AuiButton = ({text, navigation}) => {
    return (
        <Pressable onPress={()=>navigation.goBack()} style={styles.container}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export default AuiButton;