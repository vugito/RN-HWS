import React from 'react';
import styles from './styles';
import BasicLayout from "../../../common/layouts/basic-layout/basic-layout";
import PageHeader from "../../sections/page-header/page-header";
import AuiButton from "../../../common/aui/aui-button/aui-button";
import {Text} from "react-native";
import BottomBar from "../../sections/bottom-bar/bottom-bar";
import CpBody from "../../sections/cp-body/cp-body";

const ContentPage = ({navigation}) => {
    return (
        <>
            <BasicLayout
                header={<PageHeader left={<AuiButton text='Back' navigation={navigation} />}
                                    center={<Text style={{fontSize: 32, fontWeight: '600'}}>Content</Text>}
                                    right={<AuiButton text='Filter' />} />} footer={<BottomBar navigation={navigation}/>}>
                {/*<Body/>*/}
                {/*<MpBody/>*/}
                <CpBody/>
            </BasicLayout>
        </>
    );
};

export default ContentPage;