import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.contentContainer}>
              <Text style={styles.text}>Bewkoof || iTunes</Text>
            </View>
          </SafeAreaView>
        );
    }
}

 const styles = StyleSheet.create({
   safeArea: {
     flex: 1,
   },
   contentContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontWeight: 'bold',
     fontSize: 24,
   },
 });
