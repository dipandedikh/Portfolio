import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Dimensions,
  Text
} from 'react-native';
import Accordian from '../../components/Accordian';
import {colors} from '../../util/colors';

import {data} from './faq-data';

const {width, height} = Dimensions.get('screen');

export default class Faq extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}>
        <StatusBar
          barStyle={StatusBar.setBarStyle('dark-content')}
          backgroundColor={colors.primary}
        />
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Faq</Text>
              </View>
            );
          }}
          contentContainerStyle={styles.contentContainer}
          data={data}
          keyExtractor={item => item.key}
          renderItem={({item, index}) => {
            return (
              <Accordian
                key={index}
                title={item.question}
                description={item.answer}
              />
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    height: height * 0.06,
    width,
    borderBottomColor: colors.dark_gray,
    borderBottomWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
});
