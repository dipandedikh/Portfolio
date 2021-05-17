import React, {Component} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Badge, Icon} from 'react-native-elements';
import {colors} from '../../util/colors';
import SwipeList from './SwipeList';

const {width, height} = Dimensions.get('screen');

export default class Notifications extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <NotificationHeader navigation={navigation} />
        <SwipeList />
      </SafeAreaView>
    );
  }
}

function NotificationHeader({navigation}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeftItemContainer}>
        <Icon
          onPress={() => navigation.goBack()}
          type={'feather'}
          name={'arrow-left'}
          size={24}
          color={colors.primary}
        />
      </View>
      <View style={styles.headerMiddleItemContainer}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <View style={styles.headerRightItemContainer}>
        <Icon
          type={'ionicon'}
          name={'md-ellipsis-vertical'}
          size={24}
          color={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: height * 0.07,
    width,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: colors.light_gray,
    borderBottomWidth: 0.6,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerLeftItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerRightItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerMiddleItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
});
