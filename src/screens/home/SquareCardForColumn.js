import React, {Component} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {colors} from '../../util/colors';

const {height, width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.30;

export default class SaqureCardColumn extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.itemContainer}>
        <View style={{...styles.itemBackground, backgroundColor: item.color}}>
          <Icon type={item.type} name={item.icon} size={25} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    height: height * 0.15,
    borderRadius: 16,
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
  },

  itemBackground: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: height * 0.15,
    width: ITEM_WIDTH,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colors.white,
    textAlign: 'left',
  },
});
