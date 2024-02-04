import React from 'react';
import {Text, View, Alert, Pressable} from "react-native";
import styles from "../card/styles";
import { Image } from 'expo-image';

const Card = ({index, imgLink, name, price}) => {

    const handleGetProductInfo = () => {
        Alert.alert(
            "About product",
            `Name: ${name} ${'\n'}Price: ${price}`,
            [{text: 'Close'}]
        );
    }

    const test =()=> {
        console.log(imgLink)};

    return (
        <>
            <Pressable onPress={handleGetProductInfo}>
                <View style={styles.box} key={index}>
                    <View style={styles.imageContainer}>
                        {/*<Image style={styles.boxImage} source={require('../../../../assets/img/Hot-deals.png')}/>*/}
                        <Image style={styles.boxImage} source={imgLink} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.boxTitle}>{name}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.boxText}>{`$${price}`}</Text>
                    </View>
                </View>
            </Pressable>
        </>
    );
};

export default Card;