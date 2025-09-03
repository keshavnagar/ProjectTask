import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const OurProductsHeading = () => {
    return (
        <View style={styles.HeadingContain}>
            <Image source={require('../assets/OurProduct/LeftArrow.png')} />
            <Text style={styles.HeadingStyle}>Our Products</Text>
            <View style={styles.LikeImgContain}>
                <Image source={require('../assets/OurProduct/Like.png')} />
            </View>
        </View>
    )
}

export default OurProductsHeading

const styles = StyleSheet.create({
     HeadingContain: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center'
  },
    HeadingStyle: {
    fontSize: 20,
    fontWeight: 700
  },
   LikeImgContain: {
    height: 40,
    width: 40,
    backgroundColor: '#9387871F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
  },


})