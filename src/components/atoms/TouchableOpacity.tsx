import {ReactNode} from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ViewProps,
  TransformsStyle,
} from 'react-native';

import {
  BoxProps as RNBoxProps,
  VariantProps,
  boxRestyleFunctions,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle';

import {Theme} from '../../theme';

export type TouchableOpacityProps = RNBoxProps<Theme> &
  VariantProps<Theme, 'boxVariants'> &
  TransformsStyle &
  RNTouchableOpacityProps &
  ViewProps & {
    children?: ReactNode;
  };

const restyleFunctions = [
  ...boxRestyleFunctions,
  createVariant<Theme>({
    themeKey: 'boxVariants',
  }) as any,
];

export const TouchableOpacity = createRestyleComponent<
  TouchableOpacityProps,
  Theme
>(restyleFunctions, RNTouchableOpacity);
