import {addMedicationNote} from '.';
import {AppDispatch} from '../../store';

const createMedicationNote =
  (id: string, note: string) => async (dispatch: AppDispatch) => {
    const date = new Date().toISOString();
    dispatch(
      addMedicationNote({
        id,
        note: {
          text: note,
          createdAt: date,
        },
      }),
    );
  };

export {createMedicationNote};
