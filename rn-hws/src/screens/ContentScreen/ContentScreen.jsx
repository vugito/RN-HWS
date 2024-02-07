import React from 'react';
import styles from './styles';
import BasicLayout from "../../common/layouts/basic-layout/basic-layout";
import ContentBodyContent from "../../components/sections/Contents/ContentBodyContent/ContentBodyContent";

const ContentScreen = ({navigation}) => {
    return (
        <BasicLayout
            headerShown={true}
            headerTitle='Content'
            footerShown={true}
            navigation={navigation}>

            <ContentBodyContent/>

        </BasicLayout>
    );
};

export default ContentScreen;