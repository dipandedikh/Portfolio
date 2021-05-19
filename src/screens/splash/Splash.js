import React, {Component} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

const {height, width} = Dimensions.get("screen");

export default class Splash extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <LottieView
            style={{height: height * 0.25}}
            ref={animation => {
              this.animation = animation;
            }}
            source={require('./loader.json')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
  },
});
