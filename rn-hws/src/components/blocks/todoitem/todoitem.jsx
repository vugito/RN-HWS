import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';


const ToDoItem = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image style={styles.stretch} source={require('../../../../assets/icons/calendar.png')} />
                </View>
                <View>
                    <Text style={styles.title}>Enter Title</Text>
                    <Text style={styles.text}>Enter Text</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.stretch} source={require('../../../../assets/icons/checkmark.png')} />
                </View>
            </View>
        </>
    )
}

export {ToDoItem}

