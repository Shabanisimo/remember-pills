import {IMedication} from '../../models';

export const sortMedicationsByUpdateDate = (medications: IMedication[]) => {
  return medications.slice().sort((a, b) => {
    return new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf();
  });
};
