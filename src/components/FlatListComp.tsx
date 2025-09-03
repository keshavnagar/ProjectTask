import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Product, products } from './ProductsArray'
import ProductCard from './ProductCard'
const FlatListComp = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false} data={products} keyExtractor={(item: Product) => item.id} renderItem={({ item }) =>
                <ProductCard product={item} />
            } numColumns={2} />
    )
}
export default FlatListComp
const styles = StyleSheet.create({

})