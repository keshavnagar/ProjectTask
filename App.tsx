import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OurProducts from './src/components/OurProducts'
import OurProductsHeading from './src/components/OurProductsHeading'
import HomeScreen from './src/components/HomeScreen'
import MaleFemale from './src/components/MaleFemale'
import BookDetAcc from './src/components/BookDetAcc'


const App = () => {
  return (
    <SafeAreaView style={styles.ScreenStyle} >
     <BookDetAcc/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  ScreenStyle: {
    flex: 1,
    alignItems: 'center',
    gap: '5%',
  }
})