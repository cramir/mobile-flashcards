import {AsyncStorage} from 'react-native'

const storageKey = "flashCards";

function seedData() {
    let seed = [
        {
            title: 'React',
            cards: [
                {
                    question: 'Is React a Javascript UI library?',
                    answer: 'Correct'
                },
                {
                    question: 'Correct place to make Ajax requests is in a render method?',
                    answer: 'Incorrect'
                }
            ]
        },
        {
            title: 'JavaScript',
            cards: [
                {
                    question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
                    answer: 'Yes'
                },
                {
                    question: 'JavaScript is considered a weakly typed (or untyped) language?',
                    answer: 'Correct'
                }
            ]
        }
    ];

    AsyncStorage.setItem(storageKey, JSON.stringify(seed));
    return seed
}

export function getDecks() {
    //AsyncStorage.clear();
    return AsyncStorage.getItem(storageKey)
        .then((results) => {
            return (results) === null
                ? seedData()
                : JSON.parse(results)
        })
}


export function addCardToDeck(id, card) {
    return AsyncStorage.getItem(storageKey).then(result => {
        const res = JSON.parse(result);
        const newData = Object.assign({}, {
            ...res,
            [id]: {
                ...res[id],
                cards: res[id]["cards"].concat(card)
            }
        });
        AsyncStorage.setItem(storageKey, JSON.stringify(newData))
    }).done()
}

export function updateDecks(decks){
    return AsyncStorage.setItem(storageKey, JSON.stringify(decks)).done();
}