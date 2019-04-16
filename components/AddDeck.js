import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput
} from 'react-native';
import Btn from './Btn';
import {handleAddDeck} from "../actions/decks";

class AddDeck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DeckName: '',
            noBlanks: false,
        };
    }

    render() {
        const {DeckName, onPress, noBlanks} = this.state;
        const {navigation, dispatch} = this.props;
        return (
            <View style={styles.view}>
                <TextInput style={styles.input} placeholder={"Deck Name"} value={DeckName}
                           onChangeText={(text) => this.setState({DeckName: text})}/>
                {noBlanks && <Text style={styles.error}>Name cannot be blank</Text>}
                <Btn onPress={() => {
                    if(DeckName.trim() !== "") {
                        dispatch(handleAddDeck(DeckName));
                        //@todo: fix this as it is a bit hacky. Should ensure new deck has been added before navigating
                        navigation.navigate("Deck");
                    }else{
                        this.setState({noBlanks:true})
                    }
                }
                }>
                    Create
                </Btn>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    error:{
        color:'red',
    },
    "input":{
        margin: 10,
        alignItems: "center",
        borderRadius: 4,
        borderBottomWidth: 0.8,
        borderBottomColor: '#d6d7da',
    }
});

AddDeck.propTypes = {};

export default connect()(AddDeck);
