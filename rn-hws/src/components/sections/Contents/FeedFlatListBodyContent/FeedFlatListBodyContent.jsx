import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View, FlatList} from "react-native";
import {Image} from "expo-image";
import styles from './styles';
import {Messages} from "../../../../data/messages";
import SearchBox from "../../../blocks/search-box/search-box";
import MessageBox from "../../../blocks/message-box/message-box";

const FeedFlatListBodyContent = () => {

    const [messages, setMessages] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const refreshHandler = () => {
        console.log('Page refreshed')
    };

    useEffect(() => {
        setMessages(Messages);
    }, []);

    const Item = ({msg}) => (
        <View>
            <MessageBox message={msg}/>
        </View>
    );


    return (
        <>
            <View style={styles.body}>
                <SearchBox/>
                <View
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshHandler}/>
                    }
                    horizontal={false}>
                    {/*{messages.map((msg) => (*/}
                    {/*    <View key={msg.id}>*/}
                    {/*        <MessageBox message={msg}/>*/}
                    {/*    </View>*/}
                    {/*))}*/}

                    <FlatList
                        data={messages}
                        renderItem={({item}) => <Item msg={item} />}
                        keyExtractor={item => item.id}
                    />

                    {/*<View style={styles.bottomImgContainer}>*/}
                    {/*    <Image source={require('../../../../../assets/img/mausoleum.jpg')} style={styles.bottomImg}/>*/}
                    {/*</View>*/}
                </View>

            </View>
        </>
    );
};

export default FeedFlatListBodyContent;