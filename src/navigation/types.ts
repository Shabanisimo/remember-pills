import {StackScreenProps} from '@react-navigation/stack';
import {RouteNames} from './routes';

export type ScreensParams = {
  [RouteNames.UserMedication]: undefined;
  [RouteNames.MedicationDetails]: {
    medicationId: string;
  };
};

export type RootStackScreenProps<ScreenName extends keyof ScreensParams> =
  StackScreenProps<ScreensParams, ScreenName>;
