import {RouteNames} from './routes';

export type ScreensParams = {
  [RouteNames.UserMedication]: undefined;
  [RouteNames.MedicationDetails]: {
    medicationId: string;
  };
};
