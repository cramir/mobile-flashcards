import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import Btn from './Btn';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            questionN: 0,
            showQuestion: true,
            deck: props.navigation.state.params.deck,
        };
    }

    nextCard = (e) => {
        this.setState((state) => {
            return {
                showQuestion: true,
                questionN: state.questionN + 1,
                score: e === "correct" ? state.score + 1 : state.score,
            }
        })
    };

    flipCard = () => {
        this.setState((state) => {
            return {
                showQuestion: !state.showQuestion,
            }
        })
    };

    finalScreen = () => {
        const {navigation} = this.props;
        const {deck, score} = this.state;
        return (
            <View style={styles.finalView}>
                <Text style={styles.finalText}>{deck.title}</Text>
                <Text style={styles.finalText}>score: {`${score} / ${deck.cards.length}`}</Text>
                <View style={styles.btnView}>
                    <Btn onPress={() => navigation.navigate("Quiz", {deck})}>Retry quiz</Btn>
                    <Btn onPress={() => navigation.navigate("Deck", {index: deck.index})}>Back to Deck</Btn>
                    <Btn onPress={() => navigation.navigate("Home")}>Home</Btn>
                </View>
            </View>
        )
    };

    cardComp = () => {
        const {showQuestion, deck, questionN} = this.state;
        return (
            <View style={styles.cardView}>
                <Text
                    style={styles.cardText}>{showQuestion ? deck.cards[questionN].question : deck.cards[questionN].answer}</Text>
            </View>
        )
    };


    render() {
        const {questionN, deck, showQuestion} = this.state;

        return (
            <View>
                {questionN < deck.cards.length ? <View>
                        {this.cardComp()}
                        <Btn onPress={this.flipCard}>
                            {showQuestion ? "Show Answer" : "Show Question"}
                        </Btn>
                        <View style={styles.btnView}>
                            <Btn style={styles.correctBtn} onPress={this.nextCard.bind(this,"correct")} name={"correct"}>
                                Correct!
                            </Btn>
                            <Btn style={styles.incorrectBtn} onPress={this.nextCard.bind(this,"incorrect")} name={"incorrect"}>
                                Incorrect!
                            </Btn>
                        </View>
                    </View>
                    :
                    this.finalScreen()
                }
            </View>
        );
    }
}

Quiz.propTypes = {};

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        minHeight: 200,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'stretch',

    },
    cardText: {
        flex: 1,
        margin: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
    },
    finalView: {
        margin: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    finalText: {
        margin: 2,
        minHeight: 35,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
    },
    btnView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    correctBtn: {
        backgroundColor: "green"
    },
    incorrectBtn: {
        backgroundColor: "red"
    },
});


export default connect()(Quiz);
