import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

export default class List extends Component {
  static childContextTypes = {
    type: React.PropTypes.string
  };

  getChildContext() {
    return {
      type: this.props.type
    };
  }

  render() {
    const { children, type } = this.props;

    return <View>{children}</View>;
  }
}
