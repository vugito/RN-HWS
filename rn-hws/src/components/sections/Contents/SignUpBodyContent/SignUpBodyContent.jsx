import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView, Linking, Platform, Pressable, Text, TextInput, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from './styles';
import CustomButton from "../../../../common/customs/custom-button/custom-button";

const SignUpBodyContent = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const inputNameHandler = (text) => {
        setName(text);
    };

    const inputEmailHandler = (text) => {
        setEmail(text);
    };

    const inputPasswordHandler = (text) => {
        setPassword(text);
    };

    const handleForgotPassword = () => {
        const email = 'vuqar21@gmail.com';

        Linking.openURL(`mailto:${email}`).then(r => console.log(r));
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Name'
                    placeholderTextColor='#BDBDBD'
                    style={styles.input}
                    value={name}
                    onChangeText={inputNameHandler}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor='#BDBDBD'
                    keyboardType='email-address'
                    style={styles.input}
                    value={email}
                    onChangeText={inputEmailHandler}/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={inputPasswordHandler}
                    style={styles.passwordInput}
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                />
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#5DB075"
                    style={styles.icon}
                    onPress={toggleShowPassword}
                />
            </View>

            <View style={styles.checkboxContainer}>
                <MaterialCommunityIcons
                    name='checkbox-outline'
                    size={24}
                    color="#fff"
                />
                <Text style={styles.text}>I would like to receive your newsletter and other promotional
                    information.</Text>
            </View>

            <Pressable onPress={() => {
                console.log('Opened SignInScreen');
                Alert.alert("Не работает. Нажмите ОК, а дальше на 'Login' в правом верхнем углу");
            }} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <Pressable onPress={() => {
                Alert.alert("Нажмите ОК, а дальше вы будете перенаправлены в свою почту.");
                Alert.alert("Почему-то нужно нажать два раза");
                handleForgotPassword();
                // console.log('Opened ForgotPasswordScreen');
            }}>
                <Text style={styles.forgotText}>Forgot your password?</Text>
            </Pressable>

            {/*Обнаружил что нужно оптимизировать Кастомный Бутон. Добавить стилизацию*/}
            {/*<CustomButton navigation={() => navigation.navigate('SignIn')} text='Register'/>*/}
        </KeyboardAvoidingView>
    );
};

export default SignUpBodyContent;