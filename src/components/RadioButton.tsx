import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    label: string;
    value: string;
    selected: boolean;
    onPress: (value: string) => void;
};

const RadioButton: React.FC<Props> = ({ label, value, selected, onPress }) => {
    return (
        <TouchableOpacity style={styles.touchableStyle} onPress={() => onPress(value)}>
            {/* outer circle*/}
            <View style={styles.outerCircle}>
                {/* Inner circle (only if selected)*/}
                {selected ? (
                    <View style={styles.innerCircle}>

                    </View>
                ) : null}
            </View>
            {/* label */}
            <Text style={styles.labelStyle} >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    touchableStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15

    },
    outerCircle: {
        width: 14,
        height: 14,
        borderColor: '#00000067',
        borderWidth: 2,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle: {
        width: 8,
        height: 8,
        backgroundColor: '#2988FC',
        borderRadius: 50,
    },
    labelStyle: {
        fontSize: 15
    },
})