import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Services, services } from './ServiceArray'
import ServiceCard from './ServiceCard'

const OurServices = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.heading}>
                <Text >Our services</Text>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>
                    See All
                </Text></TouchableOpacity>
            </View>
            <FlatList contentContainerStyle={styles.flatlistContain} horizontal data={services} keyExtractor={(item: Services) => item.id} renderItem={({ item }) =>
                <ServiceCard services={item} />
            } />
        </View>
    )
}

export default OurServices

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    button: {

    },
    buttonText: {
        color: 'green'
    },
    outerContainer: {
        height: 200,
        gap: 20
    },
    flatlistContain: {
       gap: 15,
      margin: 20
    }

})