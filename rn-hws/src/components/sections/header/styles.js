import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        padding: 20
    },
    headerBtn: {
        flex:1,
        fontSize: 18,
        fontWeight: 500,
        // backgroundColor: 'blue',
        color: 'green'
    },
    filterBtn: {
        flex: 1,
        fontSize: 18,
        fontWeight: 500,
        // backgroundColor: 'green',
        color: 'green'
    },
    contentText: {
        flex: 1,
        fontSize: 32,
        fontWeight: 600
        // backgroundColor: 'red',
    },
})

export default styles;