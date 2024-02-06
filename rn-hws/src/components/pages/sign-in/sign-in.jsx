import React, {useState} from 'react';
import styles from './styles';
import {View, Text, TextInput} from "react-native";

const SignIn = () => {
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
        <>
            <View style={styles.container}>
                <Text>Name:</Text>
                <TextInput style={styles.input} value={name} onChangeText={inputNameHandler}/>
                <Text>Email:</Text>
                <TextInput keyboardType='email-address' style={styles.input} value={email} onChangeText={inputEmailHandler}/>
                <Text>Password:</Text>
                <TextInput keyboardType={'visible-password'} secureTextEntry style={styles.input} value={password} onChangeText={inputPasswordHandler}/>
                <Text>Repeat password:</Text>
                <TextInput secureTextEntry style={styles.input} value={repeatPassword} onChangeText={inputRepeatPasswordHandler}/>
            </View>
        </>
    );
};

export default SignIn;