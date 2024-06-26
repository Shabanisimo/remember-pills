import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {
  BoxProps,
  VariantProps,
  boxRestyleFunctions,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle';

import {Theme} from '../../theme';

export type InputProps = BoxProps<Theme> &
  VariantProps<Theme, 'inputVariants'> &
  RNTextInputProps;

const restyleFunctions = [
  ...boxRestyleFunctions,
  createVariant<Theme>({
    themeKey: 'inputVariants',
  }) as any,
];

export const Input = createRestyleComponent<InputProps, Theme>(
  restyleFunctions,
  RNTextInput,
);
