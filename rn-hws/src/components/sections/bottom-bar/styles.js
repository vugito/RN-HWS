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
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        width: '70%',
        height: '70%',
        resizeMode: 'stretch',

    }
});

export default styles;