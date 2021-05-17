import React, {Component} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../util/colors';

const {height, width} = Dimensions.get('screen');

export default class RectanglesCards extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.itemContainer}>
        <ImageBackground
          source={{
            uri: item.backdrop,
          }}
          blurRadius={2}
          style={styles.itemBackground}>
          <View style={styles.itemDullLayer} />
          <Text style={styles.titleText}>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    height: height * 0.15,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBackground: {
    backgroundColor: colors.background,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: height * 0.15,
    width,
    paddingHorizontal: 16,
  },
  itemDullLayer: {
    height: height * 0.15,
    width,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,   
    color: colors.white,
    textAlign: 'center',
  },
});
