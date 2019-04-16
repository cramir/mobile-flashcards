import React from 'react';
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
import { MonoText } from './StyledText';
import DeckListDeck from './DeckListDeck';
import {getDecks} from "../util/api";
import {receiveDecks} from "../actions/decks";
import DeckList from "./DeckList";
import Btn from './Btn';


class HomeScreen extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.homeLabel}>Flash Cards!</Text>
          <DeckList navigation={navigation}/>
          <Btn onPress={()=>navigation.navigate('AddDeck')}>
            Add Deck
          </Btn>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  navigationFilename: {
    marginTop: 5,
  },
  homeLabel:{
    margin: 10,
    flex:1,
    fontSize: 50,
    textAlign:"center",
  }
});

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(HomeScreen);