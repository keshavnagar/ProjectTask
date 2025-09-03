import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioButton from './RadioButton';

const MaleFemale = () => {
    const [gender, setGender] = useState('male');
    return (
        <View style={styles.container}>
            <RadioButton
                label='Male'
                value='male'
                selected={gender === 'male'}
                onPress={setGender}
            />
             <RadioButton
                label='Female'
                value='female'
                selected={gender === 'female'}
                onPress={setGender}
            />
        </View>
    )
}

export default MaleFemale

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
})