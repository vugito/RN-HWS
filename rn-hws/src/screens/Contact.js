import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const Contact = ({navigation}) => {

    console.log('nav', navigation)


    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Go to Home' onPress={()=>navigation.navigate('Home')}></Button>
            <Button title='Go to Profile' onPress={()=>navigation.navigate('Profile')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default Contact;