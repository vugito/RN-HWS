import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from "react-native";
import CustomButton from "../common/customs/custom-button/custom-button";

const Home = ({navigation}) => {

    console.log('nav', navigation)

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={require('../../assets/bg-img/bg-img1.jpg')}>

                <View style={styles.innerContainer}>
                    <Text style={styles.text}>Welcome to our Product</Text>
                    <Pressable onPress={() => navigation.navigate('SignUp')} style={styles.buttonContainer}>
                        <CustomButton navigation={() => navigation.navigate('SignUp')} text='Get Started'/>
                    </Pressable>
                </View>
            </ImageBackground>

            {/*<Button title='Reset Navigation' onPress={()=>navigation.replace('Home')}></Button>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32
    },
    buttonContainer: {
        backgroundColor: 'white',
        width: '80%',
        paddingHorizontal: 24,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: "center",
        opacity: 0.6
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#14a43c'
    }

});


export default Home;