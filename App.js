import React, {Component} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Fragment} from 'react';
import {Icon} from 'react-native-elements';
import {colors} from './src/util/colors';
import Faq from './src/screens/faq/Faq';
import Home from './src/screens/home/Home';
import Settings from './src/screens/settings/Settings';
import Profile from './src/screens/profile/Profile';
import Notifications from './src/screens/notifications/Notifications';
import Splash from './src/screens/splash/Splash';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const {width} = Dimensions.get('screen');

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: colors.primary,
        }}
        drawerStyle={{
          width: width * 0.55,
        }}
        drawerPosition={'right'}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Fragment>
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
            } else if (route.name === 'Settings') {
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
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="FAQ" component={Faq} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.white}} />
    </Fragment>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  }

  render() {
    const {loading} = this.state;
    return <Fragment>{loading ? <Splash /> : <DrawerNavigation />}</Fragment>;
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
