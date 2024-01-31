import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const SearchBox = () => {
    return (
        <>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    inputMode='text'
                />
            </View>
        </>
    );
};

export default SearchBox;