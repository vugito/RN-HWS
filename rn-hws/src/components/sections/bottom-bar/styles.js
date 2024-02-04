import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 40,
        // backgroundColor: 'red',
        height: 80,
        borderTopWidth: 1,
        borderTopColor: 'grey',
    },
    tabs: {
        // backgroundColor: '#1bb274',
        width: 35,
        height: 35,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: 'grey',
        backgroundColor: '#e8e8e8',
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        width: '65%',
        height: '65%',
        resizeMode: 'stretch',

    }
});

export default styles;