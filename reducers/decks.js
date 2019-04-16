import {RECEIVE_DECKS, ADD_CARD, ADD_DECK} from "../actions/decks";

export default function decks(state = {}, action){
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            };
        case ADD_DECK:
            const {deck} = action;
            return {
                ...deck,
            };
        case ADD_CARD:
            const { card } = action;
            return {
                ...state,
                [action.deck]: {
                    ...state[action.deck],
                    cards: [...state[action.deck].cards, card]

                }
            };
        default:
            return state;
    }
}