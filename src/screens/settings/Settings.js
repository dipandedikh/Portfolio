import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {STRINGS} from '../../constants/constants';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        <Text> {STRINGS.SETTINGS} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
