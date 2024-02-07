import React, {useState} from 'react';
import styles from './styles';
import {Text, TextInput, View} from "react-native";
import CustomButton from "../../common/customs/custom-button/custom-button";
import BasicLayout from "../../common/layouts/basic-layout/basic-layout";
import MarketBodyContent from "../../components/sections/Contents/MarketBodyContent/MarketBodyContent";
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