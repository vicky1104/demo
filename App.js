import * as React from 'react';
import {Text, Platform, View} from 'react-native';
import * as Device from 'expo-device';

export default function App() {
  console.warn(Platform.OS);
  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <Text>{Platform.constants.Fingerprint}</Text>
    </View>
  );
}
