import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        gap: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 14,
        borderWidth: 0.5,
        borderColor: '#F6F6F6'
    },
    passwordInput: {
        flex: 1,
        color: '#333',
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        width: '100%',
        backgroundColor: '#f3f3f3',
        color: '#333',
        paddingVertical: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#5DB075',
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        // backgroundColor: 'blue',
        color: 'white'
    },
    text: {
        fontSize: 16,
        // color: '#5DB075',
        color: 'white'
    },
    checkboxContainer: {
        flexDirection: 'row'
    }
})

export default styles;