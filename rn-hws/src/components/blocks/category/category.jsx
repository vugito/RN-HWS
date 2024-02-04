import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Category = ({label}) => {
    return (
        <>
            <View style={styles.categoryContainer}>
                <View style={styles.category}>
                    <Text style={styles.categoryText}>{label}</Text>
                </View>
            </View>
        </>
    );
};



export default Category;