import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export const Input = ({style, ...props}: TextInputProps) => {
  return <TextInput style={[styles.container, style]} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    fontWeight: '400',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'white',
  },
});
