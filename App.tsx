import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {textStyles} from './src/Utils/StyleSheets/textStyles';

export default function App(): JSX.Element {
  return (
    <View>
      <SafeAreaView />
      <Text>Hi</Text>
      <Text style={textStyles.text}>Hello</Text>
    </View>
  );
}
