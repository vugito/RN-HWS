import React, {useState} from 'react';
import styles from './styles';
import {View, Text, TextInput} from "react-native";
import CustomButton from "../../common/customs/custom-button/custom-button";

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const inputEmailHandler = (text) => {
        setEmail(text);
    };

    const inputPasswordHandler = (text) => {
        setPassword(text);
    };

    return (
        <>
            <View style={styles.container}>
                <Text>Email:</Text>
                <TextInput keyboardType='email-address' style={styles.input} value={email} onChangeText={inputEmailHandler}/>
                <Text>Password:</Text>
                <TextInput keyboardType={'visible-password'} secureTextEntry style={styles.input} value={password} onChangeText={inputPasswordHandler}/>
                <CustomButton navigation={()=>navigation.navigate('Market')} text='Sign In'/>
            </View>
        </>
    );
};

export default SignInScreen;