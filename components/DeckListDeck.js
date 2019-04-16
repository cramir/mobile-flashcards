import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

const DeckListDeck = ({onPress, cards, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.num}>
                {cards} cards
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 4,
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#d6d7da',
    },
    title:{
        fontSize: 20
    },
    num:{
        fontSize: 10
    }
});

DeckListDeck.propTypes = {};

export default DeckListDeck;
