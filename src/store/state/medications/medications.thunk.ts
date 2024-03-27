import {addMedication} from '.';
import {IMedicationForm} from '../../../models';
import {AppDispatch} from '../../store';

const createMedication =
  (data: IMedicationForm) => async (dispatch: AppDispatch) => {
    const date = new Date().toISOString();
    dispatch(
      addMedication({
        ...data,
        createdAt: date,
        updatedAt: date,
      }),
    );
  };

export {createMedication};
