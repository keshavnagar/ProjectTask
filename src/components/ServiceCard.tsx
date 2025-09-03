import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Services } from './ServiceArray'

type Props = {
    services : Services;
}

const ServiceCard: React.FC<Props> = ({services}) => {
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={services.image}/>
       
    </View>
  )
}

export default ServiceCard

const styles = StyleSheet.create({
  container: {
    width: 145,
    height: 174, 
    borderRadius: 10,
    // elevation: 10
  }, 
  image : {
    width: 131,
    height: 91,
    borderRadius: 10
  }
})