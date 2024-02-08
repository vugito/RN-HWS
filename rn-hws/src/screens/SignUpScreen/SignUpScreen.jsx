import React from 'react';
import styles from './styles';
import BasicLayout from "../../common/layouts/basic-layout/basic-layout";
import SignUpBodyContent from "../../components/sections/Contents/SignUpBodyContent/SignUpBodyContent";

const SignUpScreen = ({navigation}) => {

    return (
        <BasicLayout
            headerShown={true}
            headerTitle={'Sign Up'}
            footerShown={false}
            navigation={navigation}
            headerRightBtnType='Login'>

            <SignUpBodyContent/>

        </BasicLayout>
    );
};

export default SignUpScreen;