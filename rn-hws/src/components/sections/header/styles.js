import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        padding: 20,
        backgroundColor: 'red',
        height: 80
    },
    headerBtn: {
        flex:1,
        fontSize: 18,
        fontWeight: '500',
        // backgroundColor: 'blue',
        color: 'green'
    },
    filterBtn: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        // backgroundColor: 'green',
        color: 'green'
    },
    contentText: {
        flex: 1,
        fontSize: 32,
        fontWeight: '600'
        // backgroundColor: 'red',
    },
})

export default styles;