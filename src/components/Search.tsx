import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContain}>
                < Image source={require('../assets/HomeScreen/Search/search.png')} />
                <TextInput
                    placeholder="Search"
                />
            </View>
            < TouchableOpacity style={styles.filterContain}>
                < Image source={require('../assets/HomeScreen/Search/filter.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    searchContain: {
        width: '80%',
        height: 50,
        elevation: 10,
        borderRadius: 25,
        backgroundColor: '#fffffff6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        gap: '5%'
    },
    filterContain: {
        width: 50,
         height: 50,
        elevation: 10,
        backgroundColor: '#ffffffff',
        borderRadius: 50,
        alignItems: 'center',
        padding: 15
    }
})