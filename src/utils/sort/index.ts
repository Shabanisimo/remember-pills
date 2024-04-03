import {IMedication} from '../../models';
import {IMedicationNote} from '../../models/medicationNotes';

export const sortMedicationsByUpdateDate = (medications: IMedication[]) => {
  return medications
    .slice()
    .sort((a, b) => {
      return new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf();
    })
    .sort((a, b) => Number(b.isActive) - Number(a.isActive));
};

export const sertMedicationNotesByDate = (
  medicationNotes?: IMedicationNote[],
) => {
  return medicationNotes?.sort((a, b) => {
    return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
  });
};
