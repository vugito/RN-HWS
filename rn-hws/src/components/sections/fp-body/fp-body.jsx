import React, {useEffect, useState} from 'react';
import {ScrollView, View} from "react-native";
import SearchBox from "../../search-box/search-box";
import Category from "../../blocks/category/category";
import Box from "../../blocks/box/box";
import styles from './styles';
import {Messages} from "../../../data/messages";
import MessageBox from "../../blocks/message-box/message-box";

const FpBody = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(Messages);
    }, []);

    return (
        <>
            <View style={styles.body}>
                <SearchBox/>
                <ScrollView horizontal={false}>
                    {messages.map((msg)=>(
                        <View key={msg.id}>
                            <MessageBox message={msg}/>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

export default FpBody;