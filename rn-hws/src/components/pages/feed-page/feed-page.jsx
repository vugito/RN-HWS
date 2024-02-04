import React from 'react';
import styles from './styles';
import BasicLayout from "../../../common/layouts/basic-layout/basic-layout";
import PageHeader from "../../sections/page-header/page-header";
import AuiButton from "../../../common/aui/aui-button/aui-button";
import {Text, View} from "react-native";
import BottomBar from "../../sections/bottom-bar/bottom-bar";
import FpBody from "../../sections/fp-body/fp-body";

const FeedPage = () => {
    return (
        <>
            <BasicLayout
                header={<PageHeader left={<AuiButton text='Back' />}
                center={<Text style={{fontSize: 32, fontWeight: '600'}}>Feed</Text>}
                right={<AuiButton text='Filter' />} />} footer={<BottomBar/>}>
                {/*<Body/>*/}

                <FpBody/>
                <View>

                </View>
            </BasicLayout>
        </>
    );
};

export default FeedPage;