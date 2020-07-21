import React from 'react';
import { View, StyleSheet, Button, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles'

const CameraShutterButton = (props) => {

  return (
    <TouchableOpacity style={styles.CameraShutterButtonStyles.container} onPress={props.onPress}>
      <View style={styles.CameraShutterButtonStyles.outerCircle}>
        <View style={styles.CameraShutterButtonStyles.innerCircle}>
        </View>
      </View>
    </TouchableOpacity>
  )
};



export {CameraShutterButton};
