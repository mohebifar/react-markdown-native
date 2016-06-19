import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import Link from './components/Link';
import List from './components/List';
import Item from './components/Item';
import Image from './components/Image';
import BlockQuote from './components/BlockQuote';

const levelsFontSize = {
  [1]: 30,
  [2]: 24,
  [3]: 20,
  [4]: 16
};

export default {
  List,
  Item,
  Link,
  BlockQuote,
  Image,
  Code: props => <Text style={{fontFamily: 'monospace'}}>{props.children}</Text>,
  Emph: props => <Text style={{fontStyle: 'italic'}}>{props.children}</Text>,
  Hardbreak: () => <View />,
  Paragraph: props => <Text>{props.children}</Text>,
  Strong: props => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>,
  ThematicBreak: () => <View style={{flex: 1, backgroundColor: '#666', height: 1}}/>,
  HtmlBlock: () => null,
  HtmlInline: () => null,
  CodeBlock: props => <View>{props.children}</View>,
  Heading: props => <Text style={{fontSize: levelsFontSize[props.level]}}>{props.children}</Text>,
  Text: props => <Text>{props.literal}</Text>,
  Softbreak: props => <Text>{props.children}</Text>
};
