import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View} from "react-native";
import {Image} from "expo-image";
import styles from './styles';
import {Contents} from "../../../../data/contents";
import SearchBox from "../../../blocks/search-box/search-box";
import ContentBox from "../../../blocks/content-box/content-box";

const ContentBodyContent = () => {

    const [contents, setContents] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const refreshHandler = () => {
        console.log('Page refreshed')
    };

    useEffect(() => {
        setContents(Contents);
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
                    {contents.map((content) => (
                        <View key={content.id}>
                            {/*<MessageBox message={msg}/>*/}
                            <ContentBox content={content}/>
                        </View>
                    ))}
                </ScrollView>

            </View>
        </>
    );
};

export default ContentBodyContent;