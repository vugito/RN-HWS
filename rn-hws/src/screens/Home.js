import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const Home = ({navigation}) => {

    console.log('nav', navigation)


    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Go to MarketPage' onPress={()=>navigation.navigate('MarketPage')}></Button>
            <Button title='Reset Navigation' onPress={()=>navigation.replace('Home')}></Button>

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


export default Home;