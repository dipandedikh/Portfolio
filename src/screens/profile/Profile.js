import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {
  UserAvataWithInfo,
  WalletInfo,
  ListRows,
  Header,
} from './profile-components';
import {styles} from './styles';

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <UserAvataWithInfo />
            <WalletInfo />
            <ListRows />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
