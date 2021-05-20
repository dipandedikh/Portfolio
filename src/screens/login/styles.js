import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../util/colors';

const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.white,
    },
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    lottieContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: height * 0.2,
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.primary,
    },
    inputsContainer: {
      flex: 1,
      marginTop: 16,
      backgroundColor: colors.primary,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      alignItems: 'center',
      paddingVertical: height * 0.1,
    },
    button: {
      height: height * 0.06,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: (height * 0.06) / 2,
      width: width * 0.96,
      backgroundColor: colors.white,
      borderWidth: 2,
      borderColor: colors.secondary,
    },
    buttonText: {
      fontWeight: '700',
      fontSize: 18,
    },
    prefixText: {
      fontWeight: '700',
      color: colors.primary,
      left: -5,
    },
    registerText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.white,
      marginTop: 16,
    },
    footer: {
      height: height * 0.15,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    footerText: {
      fontSize: 12,
      fontWeight: '300',
      color: colors.white,
      textAlign: 'center',
      letterSpacing: 1,
    },
    otpBoxContainer: {
      height: height * 0.3,
      width: width * 0.98,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  