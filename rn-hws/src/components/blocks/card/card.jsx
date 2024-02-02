import React from 'react';
import {Image, Text, View, Alert} from "react-native";
import styles from "../card/styles";

const Card = ({index, imgLink, name, price}) => {

    const handleGetInfo = () => Alert.alert("About product", `Name: ${name} Price: ${price}`, [
        {text: 'Close'}
    ]);

    const test =()=> {
        console.log(imgLink)};

    return (
        <>
            <View style={styles.box} key={index} onTouchStart={test}>
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
        </>
    );
};

export default Card;