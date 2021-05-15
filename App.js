import React, { Component } from 'react'
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Fragment } from 'react';
import { Icon } from 'react-native-elements';
import { colors } from './src/util/colors';
import Faq from './src/screens/faq/Faq';
import Home from './src/screens/home/Home';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const {height, width} = Dimensions.get("screen");

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                showIcon: true,
                activeTintColor: colors.secondary,
                inactiveTintColor: colors.primary,
                indicatorStyle: {
                  backgroundColor: colors.white,
                },
              }}
              screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                  let iconName = '';
                  let iconType = '';
                  if (route.name === 'Home') {
                    iconName = 'home';
                    iconType = 'font-awesome';
                  } else if (route.name === 'Support') {
                    iconName = 'support-agent';
                    iconType = 'material';
                  } else if (route.name === 'FAQ') {
                    iconName = 'head-question';
                    iconType = 'material-community';
                  } else if (route.name === 'Profile') {
                    iconName = 'user';
                    iconType = 'font-awesome';
                  }

                  return (
                    <Icon
                      name={iconName}
                      type={iconType}
                      size={24}
                      color={focused ? colors.secondary : colors.primary}
                    />
                  );
                },
              })}
              initialRouteName={'Home'}
              swipeEnabled={true}
              tabBarPosition={'bottom'}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Support" component={SettingsScreen} />
              <Tab.Screen name="FAQ" component={Faq} />
              <Tab.Screen name="Profile" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
