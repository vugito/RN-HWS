import React from 'react';
import styles from './styles';
import {View, Image, Pressable, Alert} from "react-native";

const BasicScreenFooter = ({navigation}) => {

    console.log('Navigation: ', navigation)

    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={()=>navigation.navigate('MarketPage')} style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/cart-5DB075.png')}/>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('FeedPage')} style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/favourite-5DB075.png')}/>
                </Pressable>
                <Pressable onPress={()=>navigation.replace('Home')} style={[styles.tabs, {width: 50, height: 50, borderRadius: 25, backgroundColor: "#5DB075"}]}>
                    <Image style={styles.img} source={require('../../../../assets/icons/home-white.png')}/>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('ContentPage')} style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/menu-5DB075.png')}/>
                </Pressable>
                <Pressable onPress={() => Alert.alert('User Account Screen')} style={styles.tabs}>
                    <Image style={styles.img} source={require('../../../../assets/icons/user-5DB075.png')}/>
                </Pressable>
            </View>
        </>
    );
};

export default BasicScreenFooter;