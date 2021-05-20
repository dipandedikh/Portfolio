import React, {Component} from 'react';
import {Input} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import { colors } from '../util/colors';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {placeholder, icon, disabled, value, onChange, keyboardType, maxLength} = this.props;
    return (
      <Input
        keyboardType={keyboardType}
        value={value ? value : ""}
        disabled={disabled}
        onChangeText={onChange ? onChange : undefined}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        placeholder={placeholder}
        maxLength={maxLength}
        leftIcon={icon}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 0,
  },

  inputStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});
