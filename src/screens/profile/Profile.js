import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

import { colors } from '../../util/colors';
import {
  UserAvatarWithInfo,
  WalletInfo,
  ListRows,
  Header,
} from './profile-components';
import {styles} from './styles';
import { getUserData } from '../../services/firebase/firebase';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingData: true,
      userdata: {}
    };
  }

  componentDidMount(){
    let phoneNumber = auth().currentUser.phoneNumber;
    getUserData(phoneNumber).then(user=>{
      this.setState({
        userdata: user,
      });
      console.log('user', user);
    })
  }
  
  logout = async () => {
    await auth().signOut();
  }

  render() {
    const {userdata} = this.state ;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <UserAvatarWithInfo userdata={userdata} />
            <WalletInfo />
            <ListRows />
            <TouchableOpacity
              onPress={this.logout}
              style={styles.listRowContainer}>
              <View style={styles.iconsContainer}>
                <Icon
                  type={'material'}
                  name={'logout'}
                  size={28}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.rowText}>{`Logout`}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
