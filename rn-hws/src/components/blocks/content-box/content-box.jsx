import React, {useState} from 'react';
import styles from './styles';
import {View, Text, Pressable, useWindowDimensions} from "react-native";
import {Image} from "expo-image";



const ContentBox = ({content}) => {

    const {width, height} = useWindowDimensions();

    return (
        <>
            <View style={styles.container} key={content.id}>
                <Pressable style={[styles.imgContainer,{width: width, height: height - (height - width)}]}>
                    <Image source={content.sharedPhoto} style={styles.img}/>
                </Pressable>
                <Text style={styles.username}>{`@${content.username}`}</Text>
                <Text style={styles.textBox}>{content.sharedMessages}</Text>
                <Text style={styles.date}>{content.createDate}</Text>
                <View style={{alignSelf: 'flex-end', flexDirection: 'row', marginRight: 10, marginBottom: 10}}>
                    <View style={styles.threeDots}></View>
                    <View style={[styles.threeDots, {backgroundColor: 'white'}]}></View>
                    <View style={[styles.threeDots, {backgroundColor: 'white'}]}></View>
                </View>
            </View>
        </>
    );
};

export default ContentBox;