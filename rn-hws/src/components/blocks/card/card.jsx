import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "../card/styles";

const Card = ({index, link, name, price}) => {
    return (
        <>
            <View style={styles.box} key={index}>
                <View style={styles.imageContainer}>
                    {/*<Image style={styles.boxImage} source={require("../../../../" + `${product.imageLink}`)} />*/}
                    {/*<Image style={styles.boxImage} source={require(`../../../../${product.imageLink}`)} />*/}
                    <Image style={styles.boxImage} source={{ uri: link }} />

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