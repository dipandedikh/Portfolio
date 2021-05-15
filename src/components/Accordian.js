import React, {Component, Fragment} from 'react';
import { Dimensions } from 'react-native';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../util/colors';

const { height, width } = Dimensions.get("screen");

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const {title, description} = this.props;
    const {expanded} = this.state;
    return (
      <Fragment>
        <View style={styles.accordianContainer}>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.8}
            onPress={() => this.toggleExpand()}>
            <Text style={[styles.title]}>{title}</Text>
            <Icon
              name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={30}
              color={colors.dark_gray}
            />
          </TouchableOpacity>
          {expanded && <View style={styles.parentHr} />}
          {expanded && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptiontext}>{description}</Text>
            </View>
          )}
        </View>
      </Fragment>
    );
  }
  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  accordianContainer: {
    marginBottom: 5,
    backgroundColor: colors.background,
    paddingHorizontal: 13,
    marginHorizontal: 10,
    borderRadius: 16,
  },

  descriptiontext: {
    fontSize: 14,
    textAlign: 'left',
    paddingVertical: 16,
  },

  descriptionContainer: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    backgroundColor: colors.background,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    width: '90%',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.06,
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  parentHr: {
    height: 0.5,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    width: width * 0.86,
  },
});