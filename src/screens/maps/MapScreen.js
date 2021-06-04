import React, { Component } from 'react'
import MapView from "react-native-maps";

export default class MapScreen extends Component {
    render() {
        return (
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 23.0225,
              longitude: 72.5714,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          />
        );
    }
}
