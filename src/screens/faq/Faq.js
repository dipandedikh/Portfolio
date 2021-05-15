import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Accordian from '../../components/Accordian';
import { colors } from '../../util/colors';

import {data} from './faq-data';

export default class Faq extends Component {
  render() {
    return (
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
