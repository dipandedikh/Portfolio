import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import {colors} from '../../util/colors';
import SettingsItem from './SettingsItem';
import data from './data.json';
import {Slider} from 'react-native-elements';

const {width, height} = Dimensions.get('screen');

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
    };
  }

  render() {
    const {value} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <StatusBar
          barStyle={StatusBar.setBarStyle('dark-content')}
          backgroundColor={colors.primary}
        />
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Settings</Text>
              </View>
            );
          }}
          contentContainerStyle={{...styles.contentContainer, opacity: value}}
          data={data}
          ItemSeparatorComponent={() => {
            return <View style={{height: 0.8}}></View>;
          }}
          keyExtractor={item => item.key}
          renderItem={({item, index}) => {
            return <SettingsItem key={index} item={item} />;
          }}
        />
        <View style={styles.sliderHeaderContainer}>
          <Text style={styles.headerText}>Change Opacity</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            value={value}
            onValueChange={value => this.setState({value})}
            thumbStyle={styles.thumbnail}
            thumbProps={{
              Component: Animated.Image,
              source: {
                uri: 'https://picsum.photos/200/300',
              },
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    height: height * 0.06,
    width,
    borderBottomColor: colors.dark_gray,
    borderBottomWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderHeaderContainer: {
    height: height * 0.06,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
  contentContainer: {
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  sliderContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
    width: width * 0.9,
    paddingLeft: 16,
  },
  thumbnail: {
    height: 28,
    width: 28,
    backgroundColor: colors.primary,
  },
});
