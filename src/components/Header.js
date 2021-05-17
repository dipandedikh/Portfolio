import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../util/colors';

const {height, width} = Dimensions.get('screen');

export default class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isFeaturedActive: true,
        isChartActive: false,
      };
    }
  
    onPressChartButton = () => {
      const {isChartActive} = this.state;
      if (!isChartActive) {
        this.setState({
          isChartActive: true,
          isFeaturedActive: false,
        });
      }
    };
  
    onPressFeaturedButton = () => {
      const {isFeaturedActive} = this.state;
      if (!isFeaturedActive) {
        this.setState({
          isChartActive: false,
          isFeaturedActive: true,
        });
      }
    };
  
    render() {
      const {isFeaturedActive, isChartActive} = this.state;
  
      return (
        <View style={headerStyles.headerContainer}>
          <View style={headerStyles.leftElementContainer}>
            <Text style={headerStyles.rightText}>Geners</Text>
          </View>
          <View style={headerStyles.middleContainer}>
            <View style={headerStyles.middleButtonContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.onPressFeaturedButton}
                style={
                  isFeaturedActive
                    ? headerStyles.activeContainer
                    : headerStyles.inActiveContainer
                }>
                <Text
                  style={
                    isFeaturedActive
                      ? headerStyles.activeButtonText
                      : headerStyles.inActiveButtonText
                  }>
                  Featured
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.onPressChartButton}
                style={
                  isChartActive
                    ? headerStyles.activeContainer
                    : headerStyles.inActiveContainer
                }>
                <Text
                  style={
                    isChartActive
                      ? headerStyles.activeButtonText
                      : headerStyles.inActiveButtonText
                  }>
                  Charts
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={headerStyles.rightElementContainer}>
            <Icon
              type="font-awesome"
              name="list"
              color={colors.white}
              size={24}
            />
          </View>
        </View>
      );
    }
  }
  
  const headerStyles = StyleSheet.create({
    middleContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    middleButtonContainer: {
      height: height * 0.045,
      width: '60%',
      backgroundColor: colors.white,
      flexDirection: 'row',
      borderRadius: 8,
    },
  
    activeContainer: {
      flex: 1,
      margin: 1,
      borderRadius: 8,
      backgroundColor: colors.primary,
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
    },
  
    inActiveContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    activeButtonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '500',
    },
  
    inActiveButtonText: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: '500',
    },
  
    rightText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: '600',
    },
  
    leftElementContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    rightElementContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    headerContainer: {
      height: height * 0.08,
      width,
      backgroundColor: colors.primary,
      paddingHorizontal: 16,
      flexDirection: 'row',
    },
  });
  