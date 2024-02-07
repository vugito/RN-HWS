import React from 'react';
import {View} from 'react-native';
import styles from './styles.js';
import {ToDoItem} from "../../components/blocks/todoitem/todoitem";


const MainScreen = () => {
  return (
    <View style={styles.container}>
        <ToDoItem/>
        <ToDoItem/>
    </View>
  )
}

export default MainScreen;


