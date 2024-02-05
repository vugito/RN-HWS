import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // padding: 5,
        backgroundColor: '#f1f1f1',
        marginTop: 5,
        // marginLeft: 5,
        // marginRight: 5,
        opacity: 0.9
    },
    imgContainer: {
        // width: 60,
        // height: 60,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '95%',
        height: '95%',
        borderRadius: 10
    },
    textBox: {
        flex: 1,
        fontSize: 17,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        // backgroundColor: 'yellow'
    },
    date: {
        alignSelf: 'flex-end',
        color: 'grey',
        marginRight: 10,
        marginBottom: 5
    },
    threeDots: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#5DB075',
        marginLeft: 10,

    }
});

export default styles;