import React from 'react';
import {ScrollView, View} from "react-native";

import SearchBox from "../../search-box/search-box";
import Category from "../../blocks/category/category";
import Box from "../../blocks/box/box";
import styles from './styles';

const Body = () => {
    return (
        <>
            <View style={styles.body}>
                <SearchBox/>
                <ScrollView horizontal={false}>
                    <Category label='Hot deals'/>
                    <Box category={'Hot Deals'}/>
                    <Category label='Trending'/>
                    <Box category={'Trending'}/>
                    <Category label='For baby'/>
                    <Box category={'For baby'}/>
                    <Category label='Electronics'/>
                    <Box category={'Electronics'}/>
                    <Category label='Books'/>
                    <Box category={'Books'}/>
                </ScrollView>
            </View>
        </>
    );
};

export default Body;