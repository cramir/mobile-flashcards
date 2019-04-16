import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    FlatList
} from 'react-native';
import DeckListDeck from './DeckListDeck';

const DeckList = ({decks, navigation}) => {
    return (
        <View style={styles.view}>
            <FlatList style={styles.list}
                      data={Object.values(decks)}
                      keyExtractor={(item,index)=> index.toString()}
                      renderItem={({item, index}) => {
                          return <DeckListDeck onPress={()=> navigation.navigate("Deck", {index})} title={item.title} cards={item.cards.length}/>}

                      }
            />
        </View>
    );
};

DeckList.propTypes = {};

function mapStateToProps({decks}){
    return {decks};
;}

const styles = StyleSheet.create({
    view: {
        flex:1,
    },
    list: {}
});

export default connect(mapStateToProps)(DeckList);
