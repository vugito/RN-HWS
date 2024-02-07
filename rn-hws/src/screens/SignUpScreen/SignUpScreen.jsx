import React, {useState} from 'react';
import styles from './styles';
import {Button, Text, TextInput, View} from "react-native";
import CustomButton from "../../common/customs/custom-button/custom-button";

const SignUpScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const inputNameHandler = (text) => {
        setName(text);
    };

    const inputEmailHandler = (text) => {
        setEmail(text);
    };

    const inputPasswordHandler = (text) => {
        setPassword(text);
    };

    const inputRepeatPasswordHandler = (text) => {
        setRepeatPassword(text);
    };

    return (
        <View style={styles.container}>
            <Text>Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={inputNameHandler}/>
            <Text>Email:</Text>
            <TextInput keyboardType='email-address' style={styles.input} value={email} onChangeText={inputEmailHandler}/>
            <Text>Password:</Text>
            <TextInput keyboardType={'visible-password'} secureTextEntry style={styles.input} value={password} onChangeText={inputPasswordHandler}/>
            <Text>Repeat password:</Text>
            <TextInput secureTextEntry style={styles.input} value={repeatPassword} onChangeText={inputRepeatPasswordHandler}/>
            <CustomButton navigation={()=>navigation.navigate('SignUp')} text='Sign In'/>
        </View>
    );
};

export default SignUpScreen;