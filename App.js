import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text>  </Text>
        </View>
      </SafeAreaView>
    );
  }
}
