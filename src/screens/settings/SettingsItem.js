import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Icon, Switch} from 'react-native-elements';
import {colors} from '../../util/colors';

const {width, height} = Dimensions.get('screen');
const ITEM_HEIGHT = height * 0.08;
const ITEM_WIDTH = width;

export default class SettingsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleSwitch = () => {
    const {isActive} = this.state;
    this.setState({
      isActive: !isActive,
    });
  };

  render() {
    const {item} = this.props;
    const {isActive} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.leftContentContainer}>
          <Icon type={item.iconType} name={item.iconName} size={24} />
          <Text style={{paddingLeft: 16}}>{item.value}</Text>
        </View>
        <Switch
          onValueChange={this.toggleSwitch}
          value={isActive}
          color={colors.primary}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.84,

    elevation: 5,
  },
  leftContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
