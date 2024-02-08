import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '400',
        margin: 20,
        padding: 30
    },
    button: {
        backgroundColor: 'teal',
        width: '70%',
        padding: 20,
        alignItems: 'center',
        borderRadius: 50
    },
    buttonText: {
        fontSize: 22,
        fontWeight: '400',
        color: 'white'
    },

});

export default styles;