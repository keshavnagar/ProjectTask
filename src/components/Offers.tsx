import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Offers = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.heading}>Special Offers</Text>
            <View style={styles.subContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.textTeam}>
                        <Text style={styles.haircutText}>Haircut</Text>
                        <Text style={styles.discount}>20% off</Text>
                        <Text style={styles.date}>July 16-July 24</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Offer now
                        </Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../assets/HomeScreen/Offers/offers.png')} />
            </View>
        </View>
    )
}

export default Offers

const styles = StyleSheet.create({

    container: {
        gap: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        marginLeft: 20
    },
    subContainer: {
        flexDirection: 'row',
        width: 381,
        height: 189,
        backgroundColor: '#F6B745',
        alignSelf: 'center',
        borderRadius: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 135,
        height: 137,
        marginLeft: 40,
        gap: 15,
        alignSelf: 'flex-start',
        marginTop: 10
    },
    haircutText: {
        fontSize: 24,
        fontWeight: 700,
        color: '#FFFFFF'
    },
    discount: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFFFFF'
    },
    date: {
        fontSize: 13,
        fontWeight: 600,
        color: '#FFFFFF'
    },
    button: {
        width: 134,
        height: 32,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: 25,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 600,
        color: '##000000'
    },
    textTeam: {
        gap: 10
    }

})