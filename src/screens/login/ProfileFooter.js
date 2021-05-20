import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {styles} from './styles';

export default class ProfileFooter extends Component {
    render() {
        return (
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Duis dignissim consequat nisi, vitae lacinia nunci fringilla sit
              amet. Vivamus eget ornare felis ydu. Suspendisse congue nibh ac
              massa ornare, non maximus ex mattis.
            </Text>
          </View>
        );
    }
}
