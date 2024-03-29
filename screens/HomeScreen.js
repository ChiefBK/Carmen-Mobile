import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';
import {WebBrowser} from 'expo';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 30, height: 30, alignSelf: 'center', resizeMode: 'contain' }}
        />
      </View>
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <LogoTitle />
    ),
    headerLeft: (
      <View/>
    ),
    headerRight: (
      <View/>
    )
  };

  _onCreateWalletButton() {
    Alert.alert("You'll go to the create wallet page");
  }

  _onPromosButton() {
    Alert.alert("You'll go to the promos page");
  }

  _onRewardsButton() {
    Alert.alert("You'll go to the rewards page");
  }

  _onUpdatesButton() {
    Alert.alert("You'll go to the updates page");
  }

  _onHowToButton() {
    Alert.alert("You'll go to the 'how to' page");
  }

  render() {
    console.log("rendering homescreen");

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>

          <TouchableHighlight onPress={this._onCreateWalletButton}
                              style={[styles.firstButton, styles.buttonRow, styles.buttonView]}>
            <Text style={styles.buttonText}>Create Wallettt</Text>
          </TouchableHighlight>
          <View style={[styles.doubleButtonContainer, styles.buttonRow]}>
            <TouchableHighlight style={[styles.halfButton, styles.buttonRow, styles.buttonView]}
                                onPress={this._onPromosButton}>
              <Text style={styles.buttonText}>Promos</Text>
            </TouchableHighlight>
            <View style={[styles.buffer, styles.buttonRow]}/>
            <TouchableHighlight style={[styles.halfButton, styles.buttonRow, styles.buttonView]}
                                onPress={this._onRewardsButton}>
              <Text style={styles.buttonText}>Rewards</Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.doubleButtonContainer, styles.buttonRow]}>
            <TouchableHighlight style={[styles.halfButton, styles.buttonRow, styles.buttonView]}
                                onPress={this._onUpdatesButton}>
              <Text style={styles.buttonText}>Updates</Text>
            </TouchableHighlight>
            <View style={[styles.buffer, styles.buttonRow]}/>
            <TouchableHighlight style={[styles.halfButton, styles.buttonRow, styles.buttonView]}
                                onPress={this._onHowToButton}>
              <Text style={styles.buttonText}>How To</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  buffer: {
    flex: 1,
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2196F3',
  },
  buttonRow: {
    height: 100,
    marginBottom: 20,
  },
  halfButton: {
    flex: 4,
  },
  doubleButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  firstButton: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    flex: 1,
    flexDirection: 'row',
    minHeight: 40,
  },
  buttonText: {
    color: 'white'
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
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
