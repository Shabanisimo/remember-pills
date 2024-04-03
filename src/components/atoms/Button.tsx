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
  const onHandlePress = () => {
    if (!disabled) {
      onPress();
    }
  };
  return (
    <TouchableOpacity
      variant="center"
      height={58}
      borderRadius={8}
      onPress={onHandlePress}
      bg="secondary"
      style={style}
      activeOpacity={disabled ? 0.6 : 0.2}
      opacity={disabled ? 0.6 : 1}
      {...props}>
      <Text variant="button">{title}</Text>
    </TouchableOpacity>
  );
};
