import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createIconSet } from '@expo/vector-icons';
import * as Font from 'expo-font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus: '\uf067',
}, 
'FontAwsome');

class CircleButton extends React.Component {
    state = {
        fontIsLoaded: false,
    }

    async componentWillMount() {
        await Font.loadAsync({
            FontAwsome: fontAwsome,
        });

        this.setState({ fontIsLoaded: true });
    }

    render() {
        const { name, style, color } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return (
            <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
                {
                    this.state.fontLoaded ? (
                        <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
                    ) : null
                }
            </View>
        );
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
        fontFamily: 'FontAwsome',
    },
})

export default CircleButton;
