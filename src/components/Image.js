import React, { PropTypes, Component } from 'react';
import { Image } from 'react-native';

export default class ImageComponent extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  };

  state = {
    width: 300,
    height: 300
  };

  componentDidMount() {
    const { src } = this.props;

    if (Image.getSize) {
      Image.getSize(src, (width, height) => {
        this.setState({ width, height });
      });
    }
  }

  render() {
    const { width, height } = this.state;
    const { src } = this.props;

    return (
      <Image
        source={{uri: src}}
        style={{width, height, resizeMode: 'contain'}}
      />
    );
  }
}
