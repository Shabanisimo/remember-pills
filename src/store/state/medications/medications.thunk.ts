import uuid from 'react-native-uuid';

import {addMedication, removeMedication} from '.';
import {IMedicationForm} from '../../../models';
import {AppDispatch} from '../../store';
import {removeMedicationNotes} from '..';

const createMedication =
  (data: IMedicationForm) => async (dispatch: AppDispatch) => {
    const date = new Date().toISOString();
    dispatch(
      addMedication({
        ...data,
        id: uuid.v4().toString(),
        isActive: true,
        createdAt: date,
        updatedAt: date,
      }),
    );
  };

const deleteMedication =
  (medicationId: string) => async (dispatch: AppDispatch) => {
    dispatch(removeMedication({medicationId}));
    dispatch(removeMedicationNotes({medicationId}));
  };

export {createMedication, deleteMedication};
