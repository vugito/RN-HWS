import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const SearchBox = () => {

    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        console.log('Search input: ', searchInput)
    }, [searchInput])

    const handleInputChange = text => {
        setSearchInput(text);
    }

    return (
        <>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    inputMode='text'
                    value={searchInput}
                    onChangeText={handleInputChange}
                />
            </View>
        </>
    );
};

export default SearchBox;