import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Btn = ({ children, onPress, style = {} }) => {
    return (
        <TouchableOpacity style={[styles.default, style]} onPress={onPress}>
            <Text style={[styles.text, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#d6d7da',
        width: 120,
        height: 50,
        alignSelf: 'center',
        margin: 10,
        backgroundColor: 'blue',
        textAlignVertical: 'center',
        maxHeight: 60,
        minHeight: 40
    },
    text:{
        flex: 1,
        color: "white",
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
    }
});

Btn.propTypes = {

};

export default Btn;
