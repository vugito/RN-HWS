import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { ToDoItem } from '../../blocks/todoitem/todoitem';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
            <Button title='Go back'/>
        </View>
        <View style={styles.right}>
            <Text style={styles.headerText}>My ToDo List</Text>
        </View>
      </View>
      <View style={styles.body}>
        <ToDoItem/>
      </View>
    </View>
  )
}

export {MainPage}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        backgroundColor: '#40188F',
        height: '20vh',
        width: '100vw',
        flexDirection: 'row'
    },
    body: {
        backgroundColor: '#C3ACF1',
        height: '80vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    left: {
        flex: '3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        flex: '9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    headerText: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'white'
    }
  
  });