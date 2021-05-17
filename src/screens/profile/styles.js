import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../util/colors';

const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  iconsContainer: {
    height: height * 0.08,
    width: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowText: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  listRowContainer: {
    height: height * 0.08,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  middleBorder: {
    width: 0.35,
    marginHorizontal: 10,
    backgroundColor: colors.dark_gray,
    height: height * 0.1,
  },
  wallerSubHeaderText: {
    fontWeight: '400',
    fontSize: 14,
    paddingTop: 3,
    color: colors.dark_gray,
    opacity: 0.8,
  },
  walletHeaderText: {
    fontWeight: '800',
    fontSize: 18,
    color: colors.primary,
  },
  walletContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletInfoContainer: {
    height: height * 0.1,
    width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 16,
  },
  walletInfoInternalContainer: {
    height: height * 0.1,
    width,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderTopColor: colors.dark_gray,
    borderBottomColor: colors.dark_gray,
    flexDirection: 'row',
  },
  userInfoContainer: {
    height: height * 0.07,
    width,
    paddingHorizontal: 24,
  },
  rowContainerText: {
    paddingLeft: 16,
    fontWeight: '400',
    fontSize: 14,
    color: colors.dark_gray,
    letterSpacing: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPosition: {
    marginTop: 3,
    fontSize: 14,
    color: colors.primary,
    fontWeight: '400',
    letterSpacing: 1,
  },
  name: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '600',
    letterSpacing: 1,
  },
  avatar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    height: height * 0.07,
    width,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.primary,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
  contentContainer: {
    flexGrow: 1,
  },
  avatarContainer: {
    height: height * 0.13,
    flexDirection: 'row',
    width,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});