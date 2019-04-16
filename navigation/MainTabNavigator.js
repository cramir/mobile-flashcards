import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import Deck from '../components/Deck';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Deck: {
        screen: Deck,
        navigationOptions: ({ navigation }) => ({
            title: "Deck",
        })
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: ({ navigation }) => ({
            title: "Add Card",
        })
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: ({ navigation }) => ({
            title: "Add Deck",
        })
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: ({ navigation }) => ({
            title: "Quiz",
        })
    },

});

export default HomeStack;