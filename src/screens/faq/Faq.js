import React, {Component} from 'react';
import {FlatList, StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
import Accordian from '../../components/Accordian';
import { colors } from '../../util/colors';

import {data} from './faq-data';

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
    paddingVertical: 16,
    flexGrow: 1,
    backgroundColor: colors.white,
  },
});
