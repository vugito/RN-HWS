import React from 'react';
import styles from './styles';
import BasicLayout from "../../../common/layouts/basic-layout/basic-layout";
import PageHeader from "../../sections/Headers/page-header/page-header";
import CustomButton from "../../../common/customs/custom-button/custom-button";
import BottomBar from "../../sections/bottom-bar/bottom-bar";
import FpBody from "../../sections/fp-body/fp-body";
import {Text} from "react-native";

const FeedScreen = ({navigation}) => {
    return (
        <>
            <BasicLayout
                header={<PageHeader left={<CustomButton text='Back' navigation={navigation} />}
                center={<Text style={{fontSize: 32, fontWeight: '600'}}>Feed</Text>}
                right={<CustomButton text='Filter' />} />} footer={<BottomBar navigation={navigation}/>}>
                {/*<Body/>*/}

                <FpBody/>
            </BasicLayout>
        </>
    );
};

export default FeedScreen;