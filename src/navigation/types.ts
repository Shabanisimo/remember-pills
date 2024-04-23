import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteNames} from './routes';

export type ScreensParams = {
  [RouteNames.UserMedication]: undefined;
  [RouteNames.MedicationDetails]: {
    medicationId: string;
  };
};

export type RootStackScreenProps<ScreenName extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, ScreenName>;
