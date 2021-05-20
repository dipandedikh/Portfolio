import React, {Component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {Icon, Overlay} from 'react-native-elements';

import {checkUserInFirebase} from '../../services/firebase/firebase';
import {colors} from '../../util/colors';
import CustomInput from '../../components/CustomInput';
import {styles} from './styles';
import ProfileFooter from './ProfileFooter';

const {height, width} = Dimensions.get('screen');
const SMILE_LOADER = require('./smile_loader.json');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      confirm: null,
      otp: '',
      loading: false,
      showOTPScreen: false,
    };
  }

  showError = errorMessage => {
    showMessage(errorMessage);
  };

  /**
   * generate OTP
   */
  confirmCode = async () => {
    const {confirm, otp} = this.state;
    try {
      this.setState(
        {
          loading: true,
          showOTPScreen: false,
        },
        () => {
          this.animation.play();
        },
      );
      await confirm.confirm(otp);
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 2000);
    } catch (error) {
      this.setState({
        loading: false,
      });
      let errorMessage = {
        message: 'Invalid Code!',
        description: 'Please enter correct OTP.',
        type: 'default',
        backgroundColor: colors.primary,
        color: colors.white,
      };
      this.showError(errorMessage);
    }
  };

  /**
   * generate OTP using firebase auth
   *
   * @param {*} mobileNumber
   */
  generateOTP = async () => {
    const {mobileNumber} = this.state;
    let phone = '+91' + mobileNumber;
    try {
      this.setState(
        {
          loading: true,
        },
        () => {
          this.animation.play();
        },
      );
      let phoneNumberExists = await checkUserInFirebase(phone);
      if (phoneNumberExists) {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        this.setState({
          loading: false,
          confirm: confirmation,
          showOTPScreen: true,
        });
      } else {
        this.setState({
          loading: false,
        });
        let errorMessage = {
          message: 'Phone not exists!',
          description: 'Please register your number.',
          type: 'default',
          backgroundColor: colors.primary,
          color: colors.white,
        };
        this.showError(errorMessage);
      }
    } catch (error) {
      this.handleGenerateOTPError();
    }
  };

  handleGenerateOTPError = () => {
    this.setState({
      loading: false,
    });
    let errorMessage = {
      message: 'Something went wrong!',
      description: 'Please try again later.',
      type: 'default',
      backgroundColor: colors.primary,
      color: colors.white,
    };
    this.showError(errorMessage);
  };

  componentDidMount() {
    this.animationSmile.play();
  }

  onChangePhone = mobileNumber => {
    let phone = mobileNumber;
    phone = phone.replace(/\s+/g, '');
    this.setState({
      mobileNumber: phone,
    });
  };

  onChangeOTP = otp => {
    let otpData = otp;
    otpData = otpData.replace(/\s+/g, '');
    this.setState({
      otp: otpData,
    });
  };

  OTPModal = () => {
    const {otp, showOTPScreen} = this.state;
    if (showOTPScreen) {
      return (
        <Overlay
          overlayStyle={{padding: 0}}
          style={{padding: 0}}
          isVisible={true}>
          <View style={styles.otpBoxContainer}>
            <CustomInput
              value={otp}
              maxLength={6}
              onChange={this.onChangeOTP}
              keyboardType={'numeric'}
              placeholder={'Enter OTP'}
              icon={
                <Icon
                  name="key"
                  type={'font-awesome'}
                  size={16}
                  color={colors.primary}
                />
              }
            />
            <TouchableOpacity
              onPress={this.confirmCode}
              style={{...styles.button, width: width * 0.8}}>
              <Text style={styles.buttonText}>Submit OTP</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      );
    }
  };

  render() {
    const {mobileNumber, loading} = this.state;
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.safeArea}>
          <Overlay isVisible={loading}>
            <LottieView
              loop
              style={{height: height * 0.1}}
              ref={animation => {
                this.animation = animation;
              }}
              source={SMILE_LOADER}
            />
          </Overlay>
          {this.OTPModal()}
          <KeyboardAwareScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps={'handled'}>
            <View style={styles.lottieContainer}>
              <LottieView
                loop={false}
                style={{height: height * 0.15}}
                ref={animationSmile => {
                  this.animationSmile = animationSmile;
                }}
                source={require('./smile.json')}
              />
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Welcome to 4Smile</Text>
            </View>
            <View style={styles.inputsContainer}>
              <CustomInput
                onChange={this.onChangePhone}
                placeholder={'Enter Mobile Number'}
                keyboardType={'numeric'}
                value={mobileNumber}
                maxLength={10}
                icon={<Text style={styles.prefixText}>+91</Text>}
              />
              <TouchableOpacity
                onPress={this.generateOTP}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.registerText}>
                Dont have an account ?{' '}
                <Text style={{color: colors.secondary, marginLeft: 5}}>
                  Register
                </Text>
              </Text>
            </View>
            <ProfileFooter />
          </KeyboardAwareScrollView>
        </SafeAreaView>
        <FlashMessage ref="flashMessage" />
        <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      </View>
    );
  }
}