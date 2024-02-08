import React, {useState} from 'react';
import styles from './styles';
import BasicLayout from "../../common/layouts/basic-layout/basic-layout";
import SignInBodyContent from "../../components/sections/Contents/SignInBodyContent/SignInBodyContent";


const SignInScreen = ({navigation}) => {

    return (
        <BasicLayout
            headerShown={false}
            headerTitle={'Log In'}
            footerShown={false}
            navigation={navigation}
            >

            <SignInBodyContent/>

        </BasicLayout>
    );
};

export default SignInScreen;