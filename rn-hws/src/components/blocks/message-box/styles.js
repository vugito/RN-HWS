import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#f1f1f1',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalContainer: {
        margin: 20,
        backgroundColor: '#5DB075',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTop: {

    },
    modalBody: {
        alignItems: 'center'
    },
    modalImg: {
        width: 200,
        height: 200,
        borderRadius: 20
    },
    imgContainer: {
        width: 60,
        height: 60,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '90%',
        height: '90%',
        borderRadius: 50
    },
    messageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    date: {
        color: 'grey'
    },
    button: {
        width: 80,
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonClose: {
        backgroundColor: '#e8e8e8',
    },
    personal: {
        fontSize: 24,
        fontWeight: '500',
        color: '#e8e8e8',
        margin: 10
    },
    icons: {
        width: 25,
        height: 25
    }
});

export default styles;