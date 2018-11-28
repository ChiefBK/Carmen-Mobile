import React from 'react';
import {ScrollView, StyleSheet, Image, View, Text, Alert} from 'react-native';
import {Form, Item, Input, Icon, Picker, CheckBox, ListItem, Button} from 'native-base';
import { connect } from 'react-redux'
import { setWalletCurrency, setWalletName } from "../actions";
import { store } from "../App";


class CreateWalletScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Wallet',
  };

  constructor(props) {
    super(props);
    this.state = {
      walletName: null,
      selectedCurrency: 'bch',
      createBackup: false,
    };
  }

  onCurrencyChange(value) {
    this.setState({
      selectedCurrency: value
    });
  }

  onWalletChange(value) {
    this.setState({
      walletName: value
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.pictureHeader}>
          <Image style={{width: 200, height: 200}} source={require('../assets/images/wallet_icon.png')}/>
        </View>
        <View style={styles.contentContainer}>
          <Form>
            <Item>
              <Input placeholder="Name" onChangeText={(text) => this.setState({walletName: text})}/>
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selectedCurrency}
                onValueChange={(value, index) => this.setState({selectedCurrency: value})}
              >
                <Picker.Item label="BCH" value="bch" />
                <Picker.Item label="BTC" value="btc" />
              </Picker>
            </Item>
            {/*TODO - change to normal Item*/}
            <ListItem>
              <CheckBox checked={this.state.createBackup}
                onPress={() => { this.setState({createBackup: !this.state.createBackup}) } }/>
              <Text>Create Backup</Text>
            </ListItem>
            <Button full onPress={() => {this.props.onCreateWalletClick(this.state.walletName, this.state.selectedCurrency)}}>
              <Text>Create Wallet</Text>
            </Button>
          </Form>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  pictureHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'center',
  }
});

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateWalletClick: (walletName, walletCurrency) => {
      Alert.alert("You're creating a wallet: " + walletName + " " + walletCurrency);
      dispatch(setWalletCurrency(walletCurrency))
      dispatch(setWalletName(walletName))
    }
  }
};

const CreateWalletScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateWalletScreen);

export default CreateWalletScreenContainer;
