import React from 'react';
import styles from './styles';
import {View, Image} from "react-native";

const BottomBar = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/cart.png')}/>
                </View>
                <View style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/favourite.png')}/>
                </View>
                <View style={[styles.tabs, {width: 50, height: 50, borderRadius: 25, backgroundColor: "#5DB075"}]}>
                    <Image style={styles.img} source={require('../../../../assets/icons/home.png')}/>
                </View>
                <View style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/menu.png')}/>
                </View>
                <View style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/user.png')}/>
                </View>
            </View>
        </>
    );
};

export default BottomBar;