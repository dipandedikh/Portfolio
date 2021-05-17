import React, {Component, Fragment} from 'react';
import {Text, View} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {colors} from '../../util/colors';
import {data} from './data';
import {styles} from './styles';

export function ListRows() {
  return data.map(item => {
    return (
      <View style={styles.listRowContainer}>
        <View style={styles.iconsContainer}>
          <Icon
            type={item.iconType}
            name={item.iconName}
            size={28}
            color={colors.secondary}
          />
        </View>
        <Text style={styles.rowText}>{item.text}</Text>
      </View>
    );
  });
}

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Icon
        type={'feather'}
        name={'arrow-left'}
        size={24}
        color={colors.primary}
      />
      <Text style={styles.headerText}>Profile</Text>
      <Icon type={'feather'} name={'edit-3'} size={24} color={colors.primary} />
    </View>
  );
}

export function UserAvataWithInfo() {
  return (
    <Fragment>
      <View style={styles.avatarContainer}>
        <Avatar
          size="large"
          containerStyle={styles.avatar}
          rounded
          source={{uri: 'https://picsum.photos/200'}}
          activeOpacity={0.7}
        />
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.name}>Dipan Sharma</Text>
          <Text style={styles.userPosition}>Software Engineer</Text>
        </View>
      </View>
      <View style={styles.userInfoContainer}>
        <View style={styles.rowContainer}>
          <Icon
            type={'font-awesome'}
            name={'phone'}
            size={26}
            color={colors.dark_gray}
          />
          <Text style={styles.rowContainerText}>+91 9797516808</Text>
        </View>
        <View style={{...styles.rowContainer, paddingTop: 12}}>
          <Icon
            type={'font-awesome'}
            name={'envelope'}
            size={22}
            color={colors.dark_gray}
          />
          <Text style={styles.rowContainerText}>example@mail.com</Text>
        </View>
      </View>
    </Fragment>
  );
}

export function WalletInfo() {
  return (
    <View style={styles.walletInfoContainer}>
      <View style={styles.walletInfoInternalContainer}>
        <View style={styles.walletContainer}>
          <Text style={styles.walletHeaderText}>$200.00</Text>
          <Text style={styles.wallerSubHeaderText}>wallet</Text>
        </View>
        <View style={styles.middleBorder} />
        <View style={styles.walletContainer}>
          <Text style={styles.walletHeaderText}>12</Text>
          <Text style={styles.wallerSubHeaderText}>order</Text>
        </View>
      </View>
    </View>
  );
}
