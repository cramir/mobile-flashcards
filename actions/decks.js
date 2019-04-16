import {updateDecks} from "../util/api";
import {addCardToDeck} from "../util/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';


export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

function addCard(deck, card) {
    return {
        type: ADD_CARD,
        deck,
        card
    }
}

export function handleAddDeck(deck) {
    //console.log('handling add deck: ', deck);
    return (dispatch, getState) => {
        const {decks} = getState();
        const deckTemp = Object.assign({},Object.values(decks).concat({title: deck, cards: []}));
        //updateDecks(Object.assign({},Object.values(decks).concat(deckTemp)));
        updateDecks(deckTemp).then(()=>dispatch(addDeck(deckTemp)));
        //dispatch(addDeck(deckTemp));
    }
}

export function handleAddCard(deck, card) {
    return (dispatch, getState) => {
        addCardToDeck(deck, card);
        dispatch(addCard(deck,card));
    }
}