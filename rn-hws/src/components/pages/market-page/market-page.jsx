import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import Header from "../../sections/header/header";
import Body from "../../sections/body/body";
import BasicLayout from "../../../common/layouts/basic-layout/basic-layout";
import PageHeader from "../../sections/page-header/page-header";
import AuiButton from "../../../common/aui/aui-button/aui-button";
import BottomBar from "../../sections/bottom-bar/bottom-bar";
import MpBody from "../../sections/mp-body/mp-body";

const MarketPage = ({navigation}) => {
    return (
        <>
            <BasicLayout
                header={<PageHeader left={<AuiButton text='Back' navigation={navigation} />}
                center={<Text style={{fontSize: 32, fontWeight: '600'}}>Market</Text>}
                right={<AuiButton text='Filter' />} />} footer={<BottomBar navigation={navigation}/>}>
                {/*<Body/>*/}

                <MpBody/>
            </BasicLayout>
        </>
    );
};

export default MarketPage;