import React, {useEffect, useState} from 'react';
import styles from "./styles";
import {Image, Text, View} from "react-native";
import {Products} from "../../../data/products";
import Card from "../card/card";

const Box = ({category}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const filteredProducts = Products.filter(product => product.category === category);
        setProducts(filteredProducts);
    }, [category]);

    return (
        <>
            <View style={styles.boxContainer}>
                {products.map((product, index) => (
                    <Card key={index} index={product.id} name={product.name} imgLink={product.imageLink} price={product.price}/>
                ))}
            </View>
        </>
    );
};

export default Box;