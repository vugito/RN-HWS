import React from 'react';
import styles from './styles';
import {Pressable, View, Text, Alert, Linking, Platform, Dimensions} from "react-native";
import {modelName, brand, designName, osVersion} from 'expo-device';

const AboutDeviceScreen = ({navigation}) => {

    const {OS, Version} = Platform;
    const {width, height} = Dimensions.get('window');
    // const {modelName} = Device;
    const handleGetDeviceInfo = () => {
        console.log('Info')
        Alert.alert(
            "About device", `Brand: ${brand}
Device: ${modelName}
Design Name: ${designName}
OS: ${OS}
OS version: ${osVersion}
Version: ${Version}                 
Width: ${width}
Height: ${height} ${'\n'}`,
            [{text: 'Close'}]
        );
    }

    const handleCallUs = () => {
        const number = '+994514180227';

        Linking.openURL(`tel:${number}`).then(r => console.log(r));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Click to get information about the device.</Text>
            <Pressable onPress={handleGetDeviceInfo} style={styles.button}>
                <Text style={styles.buttonText}>Get Info</Text>
            </Pressable>

            <Text style={styles.title}>Click to call us.</Text>
            <Pressable onPress={handleCallUs} style={styles.button}>
                <Text style={styles.buttonText}>Call Us</Text>
            </Pressable>

            <Text style={styles.title}>Click go to APP.</Text>
            <Pressable onPress={()=>navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.buttonText}>Go To App</Text>
            </Pressable>
        </View>
    );
};

export default AboutDeviceScreen;