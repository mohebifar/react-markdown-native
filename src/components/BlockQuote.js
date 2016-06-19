import React from 'react';
import { View, Text } from 'react-native';

const BlockQuote = props => (
  <View style={{borderLeftWidth: 2, borderLeftColor: '#222', paddingLeft: 10}}>
    <Text>{props.children}</Text>
  </View>
);

export default BlockQuote;
