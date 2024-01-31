import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, CheckBox, Image} from 'react-native';


const ToDoItem = () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.left}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.stretch}
                                source={require('./img.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.center}>
                        <View style={styles.title}>Enter Title</View>
                        <View style={styles.text}>Enter Text</View>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox value={isSelected}
                                      onValueChange={setIsSelected}
                                      style={styles.checkbox}/>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export {ToDoItem}


const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '5rem',
        backgroundColor: '#E1D5F8',
        justifyContent: 'center'
    },
    box: {
        flexDirection: 'row',
        padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    left: {
        flex: 1,
        // backgroundColor: 'red'
    },
    imageContainer: {
        backgroundColor: '#D2C0F4',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45
    },
    stretch: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
    center: {
        flex: 5,
        marginLeft: 15,
        // backgroundColor: 'red',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 600
    },
    text: {
        fontSize: 16,
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    checkboxContainer: {
    },
    checkbox: {
        alignSelf: 'center',
        width: 20,
        height: 20,
        borderRadius: 5
    },

});