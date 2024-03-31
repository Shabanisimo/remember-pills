import {ReactNode} from 'react';
import {View, ViewProps, TransformsStyle} from 'react-native';

import {
  BoxProps as RNBoxProps,
  VariantProps,
  boxRestyleFunctions,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle';

import {Theme} from '../../theme';

export type BoxProps = RNBoxProps<Theme> &
  VariantProps<Theme, 'boxVariants'> &
  TransformsStyle &
  ViewProps & {
    children?: ReactNode;
  };

const restyleFunctions = [
  ...boxRestyleFunctions,
  createVariant<Theme>({
    themeKey: 'boxVariants',
  }) as any,
];

export const Box = createRestyleComponent<BoxProps, Theme>(
  restyleFunctions,
  View,
);
