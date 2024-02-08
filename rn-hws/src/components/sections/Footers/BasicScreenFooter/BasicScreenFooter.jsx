import React from 'react';
import styles from './styles';
import {View, Image, Pressable, Alert} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const BasicScreenFooter = ({navigation}) => {

    console.log('Navigation: ', navigation)

    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={()=>navigation.navigate('Market')} style={styles.tabs}>
                    <MaterialCommunityIcons
                        name='basket'
                        size={24}
                        color="#5DB075"
                        style={styles.icon}
                        // onPress={toggleShowPassword}
                    />

                    {/*<Image style={styles.img} source={require('../../../../../assets/icons/cart-5DB075.png')}/>*/}
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('Feed')} style={styles.tabs}>
                    <MaterialCommunityIcons
                        name='heart'
                        size={24}
                        color="#5DB075"
                        style={styles.icon}
                        // onPress={toggleShowPassword}
                    />

                    {/*<Image style={styles.img} source={require('../../../../../assets/icons/favourite-5DB075.png')}/>*/}
                </Pressable>
                <Pressable onPress={()=>navigation.replace('Home')} style={[styles.tabs, {width: 50, height: 50, borderRadius: 25, backgroundColor: "#5DB075"}]}>
                    <MaterialCommunityIcons
                        name='home-outline'
                        size={40}
                        color="#fff"
                        style={styles.icon}
                        // onPress={toggleShowPassword}
                    />
                    {/*<Image style={styles.img} source={require('../../../../../assets/icons/home-white.png')}/>*/}
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('Content')} style={styles.tabs}>
                    <MaterialCommunityIcons
                        name='collage'
                        size={24}
                        color="#5DB075"
                        style={styles.icon}
                        // onPress={toggleShowPassword}
                    />

                    {/*<Image style={styles.img} source={require('../../../../../assets/icons/menu-5DB075.png')}/>*/}
                </Pressable>
                <Pressable onPress={() => Alert.alert('User Account Screen')} style={styles.tabs}>
                    <MaterialCommunityIcons
                        name='account'
                        size={24}
                        color="#5DB075"
                        style={styles.icon}
                        // onPress={toggleShowPassword}
                    />

                    {/*<Image style={styles.img} source={require('../../../../../assets/icons/user-5DB075.png')}/>*/}
                </Pressable>
            </View>
        </>
    );
};

export default BasicScreenFooter;