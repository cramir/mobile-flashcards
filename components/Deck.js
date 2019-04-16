import React from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {connect} from "react-redux";
import Btn from './Btn';


const Deck = ({deck, navigation, dispatch}) => {

    return (
        <View style={styles.view}>
            <Text>
                {deck.title}
            </Text>
            <Text>{deck.cards.length} Cards</Text>
            {deck.cards.length > 0 && <Btn onPress={()=>navigation.navigate("Quiz",{deck:deck})}>
                Quiz
            </Btn>}
            <Btn onPress={()=>navigation.navigate("AddCard",{index:deck.index})}>
                Add new card
            </Btn>
        </View>
    );
};

Deck.propTypes = {

};

const styles = StyleSheet.create({
   view:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 20,
   }
});

function mapStateToProps(state, ownProps){
    const index = ownProps.navigation.state.params.index;
    return {deck: {
            ...state.decks[index],
            index
        }};
}

export default connect(mapStateToProps)(Deck);
