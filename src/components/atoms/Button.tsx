import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {Text, TouchableOpacity} from '.';

type RestyleProps = React.ComponentProps<typeof TouchableOpacity>;

type Props = {
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
} & RestyleProps;

export const Button = ({
  title,
  disabled = false,
  style,
  onPress,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      variant="center"
      height={58}
      borderRadius={8}
      disabled={disabled}
      onPress={onPress}
      bg="secondary"
      style={style}
      opacity={disabled ? 0.7 : 1}
      {...props}>
      <Text variant="button">{title}</Text>
    </TouchableOpacity>
  );
};
