import {createTheme} from '@shopify/restyle';

import {SPACING} from './spacing';
import {COLORS} from './colors';
import {BoxVariants, InputVariants, TextVariants} from './variants';

export const theme = createTheme({
  colors: {...COLORS},
  spacing: SPACING,
  boxVariants: BoxVariants,
  inputVariants: InputVariants,
  textVariants: TextVariants,
  scrollViewVariants: {
    defaults: {
      flex: 1,
      backgroundColor: 'ternary',
    },
  },
});

export type Theme = typeof theme;
