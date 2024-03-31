import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native';

import {
  BoxProps,
  VariantProps,
  boxRestyleFunctions,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle';

import {Theme} from '../../theme';

export type ScrollViewProps = BoxProps<Theme> &
  VariantProps<Theme, 'scrollViewVariants'> &
  RNScrollViewProps;

const restyleFunctions = [
  ...boxRestyleFunctions,
  createVariant<Theme>({
    themeKey: 'scrollViewVariants',
  }) as any,
];

export const ScrollView = createRestyleComponent<ScrollViewProps, Theme>(
  restyleFunctions,
  RNScrollView,
);
