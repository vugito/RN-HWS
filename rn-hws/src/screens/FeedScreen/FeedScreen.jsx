import React from 'react';
import styles from './styles';
import BasicLayout from "../../common/layouts/basic-layout/basic-layout";
import FeedBodyContent from "../../components/sections/Contents/FeedBodyContent/FeedBodyContent";


const FeedScreen = ({navigation}) => {
    return (
        <BasicLayout
            headerShown={true}
            headerTitle='Feed'
            footerShown={true}
            navigation={navigation}>

            <FeedBodyContent/>

        </BasicLayout>
    );
};

export default FeedScreen;