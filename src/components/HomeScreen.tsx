import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HomeScreenHead from './HomeScreenHead'
import MaleFemale from './MaleFemale'
import Search from './Search'
import Offers from './Offers'
import OurServices from './OurServices'


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HomeScreenHead />
            <MaleFemale />
            <Search />
            <Offers />
            <OurServices/>
        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: '5%'
    }
})