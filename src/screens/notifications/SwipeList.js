import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import SwipeListView from '../../components/SwipeListView';
import { colors } from '../../util/colors';
import {userData} from './data';

const {height, width} = Dimensions.get('screen');
const ITEM_HEIGHT = height * 0.1;

export default function SwipeList() {
  const [listData, setListData] = useState(userData);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    //row opened
  };

  const renderItem = data => (
    <View style={styles.rowFront}>
      <Avatar size={height * 0.066} rounded source={{uri: data.item.avatar}} />
      <View style={styles.listItemTextContainer}>
        <Text style={styles.nameText}>{data.item.user}</Text>
        <Text style={{marginTop: 4}}>{data.item.comment}</Text>
      </View>
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Icon
        type={'material'}
        name={'remove-red-eye'}
        size={24}
        color={colors.white}
      />
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}>
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      data={listData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-150}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  backTextWhite: {
    fontWeight: "600",
    fontSize: 12,
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomColor: colors.light_gray,
    borderBottomWidth: 0.5,
    height: ITEM_HEIGHT,
    paddingHorizontal: 16,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: colors.secondary,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#d11a2a',
    right: 0,
  },
  listItemTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  nameText:{
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: 0.3,
  }
});
