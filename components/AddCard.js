import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
} from 'react-native';
import Btn from "./Btn";
import {handleAddCard} from "../actions/decks";

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer:'',
            noBlanks: false,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, deck, navigation } = this.props;
        const { question, answer } = this.state;
        if (question.trim() !== '' && answer.trim() !== '') {
            dispatch(handleAddCard(deck.index, {question, answer}));
            navigation.goBack();
        } else {
            this.setState(() => ({
                noBlanks: true,
            }));
        }
    };

    render() {
        const {question, answer, onPress, noBlanks} = this.state;
        return (
            <View style={styles.view}>
                <TextInput style={styles.input} placeholder={"Card Question"}  value={question} onChangeText={(text) => this.setState({question: text})}/>
                <TextInput style={styles.input} placeholder={"Card Answer"}  value={answer} onChangeText={(text) => this.setState({answer: text})}/>
                {noBlanks && <Text style={styles.error}>neither option can be blank</Text> }
                <Btn onPress={this.handleSubmit}>
                    Create
                </Btn>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    "error": {
        color: "red"
    },
    "view":{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    "input":{
        margin: 10,
        alignItems: "center",
        borderRadius: 4,
        borderBottomWidth: 0.8,
        borderBottomColor: '#d6d7da',
    }
});

AddCard.propTypes = {

};

function mapStateToProps(state, ownProps){
    const index = ownProps.navigation.state.params.index;
    return {deck: {
            ...state.decks[index],
            index
        }};
}

export default connect(mapStateToProps)(AddCard);
