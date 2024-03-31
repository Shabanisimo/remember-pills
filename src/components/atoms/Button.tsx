import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {Text, TouchableOpacity} from '.';

type Props = {
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const Button = ({title, disabled = false, style, onPress}: Props) => {
  return (
    <TouchableOpacity
      variant="center"
      height={58}
      borderRadius={8}
      disabled={disabled}
      onPress={onPress}
      bg="secondary"
      style={style}>
      <Text variant="button">{title}</Text>
    </TouchableOpacity>
  );
};
