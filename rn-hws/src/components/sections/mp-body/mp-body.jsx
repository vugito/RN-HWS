import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View} from "react-native";
import SearchBox from "../../search-box/search-box";
import Category from "../../blocks/category/category";
import Box from "../../blocks/box/box";
import styles from './styles';
import {Categories} from "../../../data/categories";

const MpBody = () => {

    const [categories, setCategories] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const refreshHandler = () => {
        console.log('Page refreshed')
    };

    useEffect(() => {
        setCategories(Categories);
    }, []);

    return (
        <>
            <View style={styles.body}>
                <SearchBox/>
                <ScrollView refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={refreshHandler}/>
                } horizontal={false}>
                    {categories.map((category) => (
                        <View key={category.id}>
                            <Category label={category.category}/>
                            <Box category={category.category}/>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

export default MpBody;