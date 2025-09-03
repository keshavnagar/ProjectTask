import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeScreenHead = () => {
    return (
        <View>
            <View style={styles.HeadingContainer}>
                <View style={styles.locContain}>
                    <Image style={styles.locImg} resizeMode="contain" source={require('../assets/HomeScreen/HomeScreenHead/Group.png')} />
                    <View>
                        <Text style={styles.greetText}>Hi Anchal !</Text>
                        <Text style={styles.locText}> Indore</Text>
                    </View>
                </View>
                <View>
                    <Image style={styles.logoImg} source={require('../assets/HomeScreen/HomeScreenHead/logo.png')} />
                </View>
                <View style={styles.notifContain}>
                    <Image style={styles.trollyImg} source={require('../assets/HomeScreen/HomeScreenHead/trolly.png')} />
                    <Image style={styles.notifImg} source={require('../assets/HomeScreen/HomeScreenHead/Notification.png')} />
                </View>
            </View>
        </View>
    )
}

export default HomeScreenHead

const styles = StyleSheet.create({
    locContain: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '25%',
        justifyContent: 'space-between',
    },
    locImg: {
        width: 29,
        height: 29
    },
    greetText: {},
    locText: {},
    logoImg: {
        marginTop: 10,
        height: 87,
        width: 154
    },
    HeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    notifContain: {
        flexDirection: 'row',
        width: '15%',
        justifyContent: 'space-between'
    },
    trollyImg: {
        width: 29,
        height: 29
    },
    notifImg: {
        width: 29,
        height: 29
    }
})