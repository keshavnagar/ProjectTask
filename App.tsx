import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OurProducts from './src/components/OurProducts'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >
        <OurProducts />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({

})