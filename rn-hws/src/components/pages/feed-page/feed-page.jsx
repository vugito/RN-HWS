import React from 'react';
import styles from './styles';
import BasicLayout from "../../../common/layouts/basic-layout/basic-layout";
import PageHeader from "../../sections/page-header/page-header";
import AuiButton from "../../../common/aui/aui-button/aui-button";
import BottomBar from "../../sections/bottom-bar/bottom-bar";
import FpBody from "../../sections/fp-body/fp-body";
import {Text} from "react-native";

const FeedPage = ({navigation}) => {
    return (
        <>
            <BasicLayout
                header={<PageHeader left={<AuiButton text='Back' navigation={navigation} />}
                center={<Text style={{fontSize: 32, fontWeight: '600'}}>Feed</Text>}
                right={<AuiButton text='Filter' />} />} footer={<BottomBar navigation={navigation}/>}>
                {/*<Body/>*/}

                <FpBody/>
            </BasicLayout>
        </>
    );
};

export default FeedPage;