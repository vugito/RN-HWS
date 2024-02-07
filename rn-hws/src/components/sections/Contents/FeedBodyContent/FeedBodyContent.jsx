import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View} from "react-native";
import {Image} from "expo-image";
import styles from './styles';
import {Messages} from "../../../../data/messages";
import SearchBox from "../../../blocks/search-box/search-box";
import MessageBox from "../../../blocks/message-box/message-box";

const FeedBodyContent = () => {

    const [messages, setMessages] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const refreshHandler = () => {
        console.log('Page refreshed')
    };

    useEffect(() => {
        setMessages(Messages);
    }, []);

    return (
        <>
            <View style={styles.body}>
                <SearchBox/>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshHandler}/>
                    }
                    horizontal={false}>
                    {messages.map((msg) => (
                        <View key={msg.id}>
                            <MessageBox message={msg}/>
                        </View>
                    ))}
                    <View style={styles.bottomImgContainer}>
                        <Image source={require('../../../../../assets/img/mausoleum.jpg')} style={styles.bottomImg}/>
                    </View>
                </ScrollView>

            </View>
        </>
    );
};

export default FeedBodyContent;