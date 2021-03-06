import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';



export class Maps extends Component {
    render() {
        return (
          <View style={styles.container}>
            <MapView style={styles.mapStyle} />
          </View>
        );
      }
    }
    


export default Maps

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  