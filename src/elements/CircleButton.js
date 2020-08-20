import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
    render() {
        return (
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonTitle}>
                    {this.props.children}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#E31676',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 10,
    },
    circleButtonTitle: {
        fontSize: 35,
        paddingLeft: 13,
        color: '#fff',
    },
})

export default CircleButton;