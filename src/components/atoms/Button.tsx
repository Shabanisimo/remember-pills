import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type Props = {
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const Button = ({title, disabled = false, style, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});
