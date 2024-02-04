import React from 'react';
import styles from './styles';
import {View, Image} from "react-native";

const BottomBar = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/cart-5DB075.png')}/>
                </View>
                <View style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/favourite-5DB075.png')}/>
                </View>
                <View style={[styles.tabs, {width: 50, height: 50, borderRadius: 25, backgroundColor: "#5DB075"}]}>
                    <Image style={styles.img} source={require('../../../../assets/icons/home-white.png')}/>
                </View>
                <View style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/menu-5DB075.png')}/>
                </View>
                <View style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/user-5DB075.png')}/>
                </View>
            </View>
        </>
    );
};

export default BottomBar;