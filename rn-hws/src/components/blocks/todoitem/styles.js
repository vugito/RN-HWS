import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#f6e8ff',
        marginTop: 5,
        marginBottom: 5
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    stretch: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    text: {
        fontSize: 16,
    },
})

export default styles;