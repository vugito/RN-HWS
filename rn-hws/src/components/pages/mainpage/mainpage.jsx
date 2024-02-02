import React from 'react';
import {View} from 'react-native';
import { ToDoItem } from '../../blocks/todoitem/todoitem';
import styles from './styles.js';


const MainPage = () => {
  return (
    <View style={styles.container}>
        <ToDoItem/>
        <ToDoItem/>
    </View>
  )
}

export default MainPage;


