import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const Item = (props, context) => {
  const { children, nodeKey } = props;
  let listPrefix = context.type === 'Bullet' ? '● ' : `${nodeKey + 1}. `;

  return <Text>{listPrefix}{children}</Text>;
};

Item.contextTypes = {
  type: PropTypes.string
};

export default Item;
